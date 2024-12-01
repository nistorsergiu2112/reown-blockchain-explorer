import React from "react";

const NoAuthState: React.FC = () => {
  return (
    <>
      <h3 className="mt-2 text-lg font-semibold text-white">
        No NFT's or Balances found
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Make sure you add an ETH MAINNET Address in the input above and the user has NFT's or Balances
      </p>
      <div className="mt-6"></div>
    </>
  );
};

export default NoAuthState;
