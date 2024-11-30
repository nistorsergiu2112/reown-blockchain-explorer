'use client';

import { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { useAlchemyNFT } from './hooks/useAlchemyNFT';
import { mainnet } from 'wagmi/chains'

const App = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const [inputAddress, setInputAddress] = useState<string>('');
  const [mode, setMode] = useState<'balance' | 'nfts'>('balance');
  const [fetchTrigger, setFetchTrigger] = useState<boolean>(false);

  const selectedAddress = inputAddress || connectedAddress || '';

  // Balance Fetching
  const { data: balanceData, isLoading: balanceLoading, isError: balanceError } = useBalance({
    address: selectedAddress ? (selectedAddress as `0x${string}`) : undefined,
    chainId: mainnet.id,
  });

  // NFT Fetching
  const { nfts, loading: nftLoading, error: nftError } = useAlchemyNFT(
    fetchTrigger && mode === 'nfts' ? selectedAddress : ''
  );

  const handleFetch = () => {
    setFetchTrigger(true);
  };

  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold">Ethereum Address Explorer</h2>

        {/* Address Input */}
        <input
          type="text"
          placeholder="Enter Ethereum Address"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
          className="px-4 py-2 border rounded w-full"
        />

        {/* Mode Toggle */}
        <div className="mt-4">
          <button
            onClick={() => setMode('balance')}
            className={`px-4 py-2 rounded ${mode === 'balance' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Fetch Balance
          </button>
          <button
            onClick={() => setMode('nfts')}
            className={`px-4 py-2 rounded ml-2 ${mode === 'nfts' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Fetch NFTs
          </button>
        </div>

        {/* Fetch Button */}
        <div className="mt-4">
          <button onClick={handleFetch} className="px-4 py-2 bg-green-500 text-white rounded">
            Fetch
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mb-8">
        {mode === 'balance' ? (
          <div>
            <h2 className="text-lg font-bold">Balance</h2>
            {balanceLoading && <p>Loading balance...</p>}
            {balanceError && <p className="text-red-500">Error fetching balance.</p>}
            {balanceData && (
              <div>
                <p>
                  {balanceData.formatted} {balanceData.symbol}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold">NFTs</h2>
            {nftLoading && <p>Loading NFTs...</p>}
            {nftError && <p className="text-red-500">{nftError}</p>}
            {nfts.length === 0 && !nftLoading && <p>No NFTs found.</p>}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {nfts.map((nft, index) => (
                <div key={index} className="border rounded p-4">
                  {nft.image && (
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="w-full h-32 object-cover rounded"
                    />
                  )}
                  <h3 className="mt-2 text-sm font-bold">{nft.title}</h3>
                  <p className="text-xs">Contract: {nft.contractAddress}</p>
                  <p className="text-xs">Token ID: {nft.tokenId}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;