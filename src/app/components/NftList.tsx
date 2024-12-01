import { useEffect } from 'react';
import { useAlchemyNFT } from '../hooks/useAlchemyNFT';
import { useBalance } from 'wagmi';
import { mainnet } from 'wagmi/chains'
import {
  addressSelector,
  useAddressStore,
  balanceSelector,
} from '../store/addressStore';
import Card from './Card';

const NFTList = () => {
  const address = useAddressStore(addressSelector);
  const setNfts = useAddressStore((state) => state.setNfts);
  const setBalance = useAddressStore((state) => state.setBalance);
  const balance = useAddressStore(balanceSelector); 
  const { nfts, loading, error } = useAlchemyNFT(address || '');

  const { data: balanceData, isLoading: balanceLoading, isError: balanceError } = useBalance({
    address: address || undefined,
    chainId: mainnet.id
  });

  useEffect(() => {
    if (!loading && !error && nfts.length > 0) {
      setNfts(nfts);
    }
  }, [nfts, loading, error, setNfts]);

  useEffect(() => {
    if (balanceData && !balanceError) {
      setBalance(balanceData.formatted);
    }
  }, [balanceData, balanceError, setBalance]);

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
        </div>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {!loading && nfts.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No NFTs found.</p>
      )}
      <div className="text-lg font-medium mt-4 text-gray-700">
        {balanceLoading
          ? 'Fetching balance...'
          : balanceError
          ? 'Failed to fetch balance'
          : balance
          ? `Balance: ${balance} ETH`
          : 'No balance available'}
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-4"
      >
        {!loading &&
          nfts.slice(0, 20).map((nft, index) => (
            <Card
              key={index}
              title={nft.title}
              image={nft.image}
              contractAddress={nft.contractAddress}
              tokenId={nft.tokenId}
            />
          ))}
      </ul>
    </div>
  );
};

export default NFTList;