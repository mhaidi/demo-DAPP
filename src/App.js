import './App.css';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
function App() {

  const [greeter, setGreeterValue] = useState('');

  useEffect(() => {
    fetchGreeting();
  }, [])


  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, Greeter.abi, provider);
      try {
        const data = await contract.greet();
        setGreeterValue(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function setGreeting() {
    if (!greeter) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeter);
      setGreeterValue('');
      await transaction.wait();
      fetchGreeting();
    }

  }

  return (
    <div className="App">
      <h1>Test DAPP</h1>
      <h3>{greeter}</h3>

      <input type='text' onChange={e => setGreeterValue(e.target.value)} />
      <button onClick={setGreeting}>Send</button>

    </div>
  );
}

export default App;
