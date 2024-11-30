'use client';

import { useAccount } from 'wagmi';
import { useState } from 'react';
import { useAlchemyNFT } from './hooks/useAlchemyNFT';
import Card from './components/Card';

const App = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const [inputAddress, setInputAddress] = useState<string>('');
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const selectedAddress = inputAddress || connectedAddress || '';

  const { nfts, loading, error } = useAlchemyNFT(fetchTrigger ? selectedAddress : '');

  const handleFetch = () => {
    setFetchTrigger(true);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Ethereum NFT Explorer</h2>
      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter Ethereum Address"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
          className="px-4 py-2 border rounded w-96 text-gray-800"
        />
        <button
          onClick={handleFetch}
          className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Fetch NFTs
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <p className="text-gray-500">Loading NFTs...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && nfts.length === 0 && <p className="text-gray-500">No NFTs found.</p>}
        {!loading &&
          nfts.slice(0, 9).map((nft, index) => (
            <Card
              key={index}
              title={nft.title}
              image={nft.image}
              contractAddress={nft.contractAddress}
              tokenId={nft.tokenId}
            />
          ))}
      </div>
    </div>
  );
};

export default App;