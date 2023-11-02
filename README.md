### DEMO DAPP with (Solidity, HardHat, React & ethers)

## Setup your project 

# 1. Create project react
npx create-react-app name-app

# 2. install dependancies
npm install --save-dev ethers@5.5.2 hardhat@2.8.0 ethereum-waffle@3.4.0 chai@4.3.4 @nomiclabs/hardhat-ethers@2.0.3 @nomiclabs/hardhat-waffle@2.0.1

# 3. initialize hardhat
npx hardhat

# 4. edit hardhat.config.js 
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};

## Compile, Deploy and Run Smart Contract
# 5. compile smart contract
npx hardhat compile

# 6. Start some test nodes of blockchain Ethereum
npx hardhat node

# 7. Deploy smart contract with some address into test node created before 
npx hardhat run .\scripts\deploy.js --network localhost

# 8. Connect private key (address) with metamask
copy/paste from powershell (first address for example) into the metamask wallet and choose the appropiate network in this case localhost:8545

## Front-end with React and Ethers
# Cleaning and customizing frent-end with react 
 1.npm start
 2.Delete <headder> from app.jsx