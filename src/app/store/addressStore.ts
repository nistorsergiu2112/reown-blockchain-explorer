import { create } from 'zustand';

interface AddressState {
  address: `0x${string}` | '';
  setAddress: (address: string) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
  address: '', // Default state
  setAddress: (address) =>
    set({ address: address.startsWith('0x') ? (address as `0x${string}`) : '' }),
}));