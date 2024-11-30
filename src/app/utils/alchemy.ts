import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || 'your-api-key', // Replace with your Alchemy API Key
  network: Network.ETH_MAINNET, // Replace with the desired network (e.g., Network.ETH_SEPOLIA)
};

export const alchemy = new Alchemy(settings);