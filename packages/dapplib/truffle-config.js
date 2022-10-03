require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender traffic wall regret often champion coral light army giant'; 
let testAccounts = [
"0xf0028bec06cf9d54ddd7b6008cc46e1c9828ee24ea059a66645bbd06393afd63",
"0xbd68b11aa84537b54946944c5970f4df4e2342c004ee6a749546b954693d415c",
"0x86e38616f424331f66844688c5d81c56058cad3b570882929b592a6b8c3b8298",
"0xfd981c7c2f4d3d3d3ca38ffdad194e4b24ed18cc2bd00be755b52b8680d24cbb",
"0xb3494c4bd6d6efe5e35d204b944afc9d4da76331e629c85a032d715a70d7008e",
"0x7f533fc305e12655205282b9e68736c54c565b04f131f4d6c7e613e2cc232cfb",
"0xd933a73315c3647bda9345802960c9d76ea4f71d90c11a0605a6b658fbe23874",
"0x3917b8bf122cf63a08a08e19744d726f3db6a8557858bc017f79a6f2f961bfe6",
"0xf3672dfd7f3e4df9cdb9c1a99501418ae1373602a34716442fbfa0388a077dc4",
"0x60509db0495db69d03fbf9034321df37bb756d8edd2f433d86fd49715ac84161"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

