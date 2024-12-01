import React from 'react';
import { truncateAddress } from '../utils/truncateEthAddress';

interface CardProps {
  title: string;
  image: string;
  contractAddress: string;
  tokenId: string;
}

const Card: React.FC<CardProps> = ({ title, image, contractAddress, tokenId }) => {
  return (
    <li key={tokenId} className="relative">
        <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
            src={image}
            alt={title}
              className="pointer-events-none aspect-[10/7] object-cover group-hover:opacity-75"
            />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">Contract: {truncateAddress(contractAddress)}</p>
    </li>
  );
};

export default Card;