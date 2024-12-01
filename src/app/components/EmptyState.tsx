import { useEffect, useState, useMemo } from 'react';
import ConnectButton from './ConnectButton';
import { useAccount } from 'wagmi';
import { useAddressStore, addressSelector, nftsSelector } from '../store/addressStore';
import NoAuthState from '../EmptyStatesComponents/NoAuthState';
import NoAddressState from '../EmptyStatesComponents/NoAddressState';
import NoResultsState from '../EmptyStatesComponents/NoResultsState';

enum EmptyStateType {
  NoAddress = 'NoAddress',
  NoAuth = 'NoAuth',
  NoResults = 'NoResults',
}

const EmptyState = () => {
  const [emptyType, setEmptyType] = useState<EmptyStateType>(EmptyStateType.NoAuth);
  const { address } = useAccount();
  const nfts = useAddressStore(nftsSelector);
  const searchAddress = useAddressStore(addressSelector);

  useEffect(() => {
    if (!address) {
      setEmptyType(EmptyStateType.NoAuth);
    } else if (!searchAddress) {
      setEmptyType(EmptyStateType.NoAddress);
    } else if (nfts.length === 0) {
      setEmptyType(EmptyStateType.NoResults);
    }
  }, [address, nfts, searchAddress]);

  const renderEmptyState = useMemo(() => {
    switch (emptyType) {
      case EmptyStateType.NoAuth:
        return (
          <>
            <NoAuthState />
            <ConnectButton />
          </>
        );
      case EmptyStateType.NoAddress:
        return <NoAddressState />;
      case EmptyStateType.NoResults:
        return <NoResultsState />;
      default:
        return null;
    }
  }, [emptyType]);

  return (
    <div className="text-center flex flex-col items-center">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="mx-auto size-12 text-gray-400"
      >
        <path
          d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {renderEmptyState}
    </div>
  );
};

export default EmptyState;