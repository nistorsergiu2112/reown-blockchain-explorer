import { useState, useEffect } from 'react';
import { alchemy } from '../utils/alchemy';

interface NFT {
  title: string;
  image: string;
  contractAddress: string;
  tokenId: string;
}

export const useAlchemyNFT = (address: string) => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!address) return;

      setLoading(true);
      setError(null);

      try {
        const response = await alchemy.nft.getNftsForOwner(address);
        console.log('nft fetcher', response);
        const formattedNFTs = response.ownedNfts.map((nft) => ({
          title: nft.name || `Token ID: ${nft.tokenId}`,
          image:
          nft.image?.cachedUrl || // Prefer cached URL
          nft.image?.thumbnailUrl || // Fallback to thumbnail
          nft.image?.originalUrl ||
            '',
          contractAddress: nft.contract.address || '',
          tokenId: nft.tokenId || '',
        }));
        console.log('formattedNFTs', formattedNFTs);
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