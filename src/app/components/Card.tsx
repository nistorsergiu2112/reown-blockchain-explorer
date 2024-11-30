import React from 'react';

interface CardProps {
  title: string;
  image: string;
  contractAddress: string;
  tokenId: string;
}

const Card: React.FC<CardProps> = ({ title, image, contractAddress, tokenId }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-md mb-4">
          <p className="text-gray-500 dark:text-gray-400">No Image</p>
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
      {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p> */}
      <p className="text-xs text-gray-500 dark:text-gray-400">Contract: {contractAddress}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">Token ID: {tokenId}</p>
    </div>
  );
};

export default Card;