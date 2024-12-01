import { useState, useEffect } from 'react';
import { alchemy } from '../utils/alchemy';

interface NFT {
  title: string;
  image: string;
  contractAddress: string;
  tokenId: string;
}

interface AlchemyResponse {
  ownedNfts: Array<{
    name?: string;
    image?: {
      cachedUrl?: string;
      thumbnailUrl?: string;
      originalUrl?: string;
    };
    tokenId: string;
    contract: {
      address: string;
    };
  }>;
}

export const useAlchemyNFT = (address: `0x${string}` | '') => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!address) return;

      setLoading(true);
      setError(null);

      try {
        const response: AlchemyResponse = await alchemy.nft.getNftsForOwner(
          address
        );

        const formattedNFTs: NFT[] = response.ownedNfts.map((nft) => ({
          title: nft.name || `Token ID: ${nft.tokenId}`,
          image:
            nft.image?.cachedUrl || 
            nft.image?.thumbnailUrl ||
            nft.image?.originalUrl ||
            '',
          contractAddress: nft.contract.address,
          tokenId: nft.tokenId,
        }));

        setNfts(formattedNFTs);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch NFTs.');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [address]);

  return { nfts, loading, error };
};