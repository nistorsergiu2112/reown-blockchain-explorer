import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || 'your-api-key',
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);