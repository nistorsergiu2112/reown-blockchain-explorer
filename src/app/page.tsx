"use client";

import { useMemo } from "react";
import { useAccount } from "wagmi";
import Header from "./components/Header";
import NFTList from "./components/NftList";
import {
  useAddressStore,
  addressSelector,
  nftsSelector,
} from "./store/addressStore";
import EmptyState from "./components/EmptyState";

const App = () => {
  const { address: userAddress } = useAccount();
  const address = useAddressStore(addressSelector);
  const nfts = useAddressStore(nftsSelector);

  const isEmptyState = useMemo(() => {
    return !address && !nfts.length;
  }, [address, nfts]);

  return (
    <>
      <Header userAddress={userAddress} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl mt-[10rem]">
          {isEmptyState ? <EmptyState /> : <NFTList />}
        </div>
      </div>
    </>
  );
};

export default App;
