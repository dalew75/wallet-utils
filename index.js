const ethers = require('ethers');

let [seedPhrase, numWalletsStr, label] = process.argv.slice(2);
let numWallets = numWalletsStr ? parseInt(numWalletsStr) : 1;
label = label ? label : 'new';

if (seedPhrase === 'random') {
  seedPhrase = ethers.Wallet.createRandom()._mnemonic().phrase;
  console.log(`${label}: Created new seed phrase: '${seedPhrase}'`);
}
else {
  console.log(`${label}: Seed phrase: '${seedPhrase}'`);
}

let wallet;
console.log(`First ${numWallets} wallet(s):`);
for (let i = 0; i < numWallets; i++) {
  wallet = ethers.Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/${i}`);
  console.log(`${(i+1).toString().padStart(numWallets.toString().length, " ")}: ${wallet.address}: private key: ${wallet.privateKey}`);
}

// https://ethereum.stackexchange.com/questions/84615/recover-all-the-account-under-mnemonic-using-ethers-js