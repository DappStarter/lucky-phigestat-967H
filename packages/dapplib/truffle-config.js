require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strike crouch pitch uncover inflict perfect fringe gift'; 
let testAccounts = [
"0x6c116fb22c1a93147424a18c15f464e333524752281e9572ae6922178adc7c04",
"0xacf87dc4fa764bfa2f5a7594e6aa0548d626520cca52cdfb9f35bdd385da8da3",
"0x7eec99497badfc917243f2ff2ced858d399c93e600b300793ab1cde3f5a66410",
"0x371084fbf688db3f8272ed86f18dd18ff99b1500d0cb0d7b2e22916cad6e77e7",
"0x310ea9329a87a933fc6baa6dbe63b56c6c3af4b755fdc2d6214ba3b71692fcfc",
"0x7126557dfe3a1364daf5f432dd4442f9bac2f6930dcc8cfb5b237ed4c20de99d",
"0x2de593f284ef80c033959889bd0dd807338c6b2a61709465671cebd2be24ec8e",
"0x4070e4ce15b1039943528a05d31c6955b24f46056a4148048db48626962d454c",
"0xa1272d502c2ae769b84c1ce1ea526a167ca21ac594a526219a1720e6d822bdcf",
"0x00f4bc7f10bc845e522d732593f618308abaf0ca1d5a1969ce19805fb37eef30"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


