export function truncateAddress(address: string): string {
    if (!address || address.length < 10) {
      throw new Error('Invalid Ethereum address');
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }