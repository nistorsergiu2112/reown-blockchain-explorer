import { useAccount, useConnect, useDisconnect } from 'wagmi';


const ConnectButton = () => {
    const { isConnected } = useAccount();
    const { connectors, connect} = useConnect();
    const { disconnect } = useDisconnect();

    const handleButtonClick = () => {
        if (isConnected) {
            disconnect();
        } else {
            connect({ connector: connectors[0] });
        }
    }

  return (
    <button
    type="button"
    onClick={handleButtonClick}
    className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isConnected
          ? 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
          : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'
      }`}  >{isConnected ? 'Disconnect' : 'Connect'}</button>
  );
}

export default ConnectButton;