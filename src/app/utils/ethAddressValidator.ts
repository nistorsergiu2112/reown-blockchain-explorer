import { isAddress } from "ethers";

export const validateEthereumAddress = (address: string): boolean => {
  return isAddress(address);
};