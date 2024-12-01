import { create } from "zustand";

interface NFT {
  title: string;
  image: string;
  contractAddress: string;
  tokenId: string;
}

interface AddressState {
  address: `0x${string}` | '';
  nfts: NFT[]; 
  balance: string | null;
  setAddress: (address: `0x${string}` | "") => void;
  setNfts: (nfts: NFT[]) => void;
  setBalance: (balance: string | null) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
  address: "", 
  nfts: [],
    balance: null,
  setAddress: (address: `0x${string}` | "") =>
    set({ address: address.startsWith("0x") ? address : "" }), 
  setNfts: (nfts) => set({ nfts }), 
    setBalance: (balance) => set({ balance }),
}));

export const addressSelector = (state: AddressState) => state.address;

export const nftsSelector = (state: AddressState) => state.nfts;

export const balanceSelector = (state: AddressState) => state.balance;