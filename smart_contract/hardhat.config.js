//https://eth-goerli.g.alchemy.com/v2/NEg6J-n_KsypTLZrU1zBXg3eNhekuMBW

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks: {
    Goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/NEg6J-n_KsypTLZrU1zBXg3eNhekuMBW',
      accounts: ['e613542f8b245fef42c84c7ad99ebbe3b3b88cc15b7253854e8446cfdbcfa658']
    }
  }
}