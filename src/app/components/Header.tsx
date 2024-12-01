import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import ConnectButton from "./ConnectButton";
import { truncateAddress } from "../utils/truncateEthAddress";
import { useAddressStore } from "../store/addressStore";
import { validateEthereumAddress } from "../utils/ethAddressValidator";

interface HeaderProps {
  userAddress: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ userAddress }) => {
  const [inputAddress, setInputAddress] = useState("");
  const [isValid, setIsValid] = useState(true);
  const setAddress = useAddressStore((state) => state.setAddress);

  const handleFetch = () => {
    const isAddressValid = validateEthereumAddress(inputAddress.trim());
    setIsValid(isAddressValid);

    if (isAddressValid) {
      setAddress(inputAddress.trim() as `0x${string}`);
    }
  };

  return (
    <>
      <div className="bg-white shadow-sm data-[open]:fixed data-[open]:inset-0 data-[open]:z-40 data-[open]:overflow-y-auto lg:static lg:overflow-y-visible data-[open]:lg:static data-[open]:lg:overflow-y-visible">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex shrink-0 items-center">
                <span className="h-8 w-auto text-black text-2xl font-bold">
                  ETH Explorer
                </span>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="grid w-full grid-cols-1">
                  <Tippy
                    content="Invalid Ethereum address"
                    visible={!isValid}
                    placement="top"
                    animation="shift-away"
                    theme="light"
                  >
                    <input
                      name="search"
                      type="search"
                      placeholder="Enter Ethereum Address"
                      value={inputAddress}
                      onChange={(e) => setInputAddress(e.target.value)}
                      className={`col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base ${
                        isValid ? "text-gray-900" : "text-red-600"
                      } outline outline-1 -outline-offset-1 ${
                        isValid
                          ? "outline-gray-300 focus:outline-indigo-600"
                          : "outline-red-600 focus:outline-red-600"
                      } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6`}
                    />
                  </Tippy>
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-between xl:col-span-4">
              <button
                type="button"
                onClick={handleFetch}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Fetch
              </button>
              {userAddress ? truncateAddress(userAddress) : ""}
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;