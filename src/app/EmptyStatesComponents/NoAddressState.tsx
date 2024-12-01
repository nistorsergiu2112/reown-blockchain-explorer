import React from "react";

const NoAuthState: React.FC = () => {
  return (
    <>
      <h3 className="mt-2 text-lg font-semibold text-white">
        Add an ETH MAINNET Address in the input above
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        You will be able to return balances or NFT's for this
      </p>
      <div className="mt-6"></div>
    </>
  );
};

export default NoAuthState;
