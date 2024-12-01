import React from "react";

const NoAuthState: React.FC = () => {
  return (
    <>
      <h3 className="mt-2 text-lg font-semibold text-white">
        Login using metamask ( Optional )
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by searching for NFT's or balances using an ethereum address
        on Mainnet
      </p>
      <div className="mt-6"></div>
    </>
  );
};

export default NoAuthState;
