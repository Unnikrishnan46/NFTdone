require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/KDFAi64pR0nHxqJGLR96juWLV00Dxyu3",
      accounts: ['db8ecc6c90d35e6849939ab5978e1ac372ac6591df8355d2e2ef740d4e61744f']
    }
  },
};