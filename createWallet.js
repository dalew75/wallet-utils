//Import dependencies
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

let [seedPhrase, numWalletsStr, label] = process.argv.slice(2);
let numWallets = numWalletsStr ? parseInt(numWalletsStr) : 1;

//Define the network
const network = bitcoin.networks.bitcoin //use networks.testnet for testnet
let mnemonic = seedPhrase || bip39.generateMnemonic();
if (seedPhrase === 'random') {
  mnemonic = bip39.generateMnemonic()
  console.log(`${label}: Created new mnemonic: '${mnemonic}'`);
}

const seed = bip39.mnemonicToSeedSync(mnemonic);
  let root = bip32.fromSeed(seed, network);

  let btcAddress;
  console.log(`First ${numWallets} wallet(s):`);
  for (let i = 0; i < numWallets; i++) {
    let account = root.derivePath(`m/49'/0'/0'/${i}`);
    let node = account.derive(0).derive(0);

    btcAddress = bitcoin.payments.p2pkh({
      pubkey: node.publicKey,
      network: network,
    }).address
    console.log(`${(i + 1).toString().padStart(numWallets.toString().length, " ")}: ${btcAddress}: private key: ${node.toWIF()}`);
  }
