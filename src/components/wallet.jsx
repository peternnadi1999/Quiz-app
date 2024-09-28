import React, { useEffect, useState } from 'react';

const WalletConnect = () => {
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  
  const checkEthereumProvider = () => {
    return typeof window.ethereum !== 'undefined';
  };

  
  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      setErrorMessage('Please connect to MetaMask.');
      setAccount(null);
      setIsConnected(false);
    } else {
      setAccount(accounts[0]);
      setIsConnected(true);
      setErrorMessage(null);
    }
  };


  const handleChainChanged = async (chainId) => {
    const networkId = parseInt(chainId, 16); // Convert hex to decimal
    setNetwork(networkId);
    setErrorMessage(null);
    console.log(`Network changed to ${networkId}`);
  };


  const connectWallet = async () => {
    if (!checkEthereumProvider()) {
      setErrorMessage('Ethereum wallet not detected.');
      return;
    } 

    try {
    // Requests access to the user's Ethereum accounts via the provider
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      handleAccountsChanged(accounts);
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      handleChainChanged(chainId);
    } catch (err) {
      if (err.code === 4001) {
        setErrorMessage('User rejected the connection request.');
      } else {
        setErrorMessage(err.message);
      }
    }
  };

  useEffect(() => {
    if (checkEthereumProvider()) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (checkEthereumProvider()) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  return (
    <div className="wallet-container">
      <h1>Connect to Ethereum Wallet</h1>
      {isConnected ? (
        <div className="connected-info">
          <p><strong>Connected Account:</strong> {account}</p>
          <p className="network-info">
            <strong>Connected to Network:</strong> {network ? network : 'Loading...'}
          </p>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default WalletConnect;


// const [provider, setProvider] = useState(null);
// const [account, setAccount] = useState(null);

// const connectWallet = async () => {

//   const providerOptions = {
   
//     walletconnect: {
//       display: {
//         name: "Mobile",
//         description: "Scan qrcode with your mobile wallet"
//       },
//       package: WalletConnectProvider,
//       options: {
//         infuraId: "INFURA_ID" // required
//       }},
//       injected: {
//         display: {
//           name: "Injected",
//           description: "Connect with the provider in your Browser"
//         },
//         package: null
//       },
//   };

//   const web3Modal = new Web3Modal({
//     cacheProvider: true, 
   
//     theme: {
//       background: "rgb(39, 49, 56)",
//       main: "rgb(199, 199, 199)",
//       secondary: "rgb(136, 136, 136)",
//       border: "rgba(195, 195, 195, 0.14)",
//       hover: "rgb(16, 26, 32)"
//     },
//     providerOptions,
//   });

//   const instance = await web3Modal.connect();
  
//   // if (!instance) throw new Error("No provider found");

//   const ethersProvider =new ethers.BrowserProvider(instance);
  

//   // // Get signer (used to send transactions)
//   const signer = ethersProvider.getSigner();
 
  
//   // // Get user account (Ethereum address)
//   const account = await signer.address;
//   setAccount(account);
//   console.log(account);

//   setProvider(ethersProvider);
// }
// import WalletConnect from "./components/wallet";
// import Web3Modal from 'web3modal';
// import WalletConnectProvider from '@walletconnect/web3-provider';

{/* <div className="bg-slate-600 wallet-container"> 
      <h1>Web3Modal Example</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div> */}