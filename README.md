# wallet-utils

NodeJS command line utility to create new seed phrases, output wallet addresses and private keys.  Also can input existing seed phrases to get this information.  

If you don't trust using 3rd party tools to generate your private keys, download this utility, inspect the source, and run locally. (with access to internet disabled if you're really paranoid).  Write down your seed phrase offline, and exit out. There will be no doubt that nobody has ever seen your seed phrase.

You run the script as described below, and here are explantions of the parameters:
- **Network**: eth/btc for the network.  use eth for EVM compatible networks like Polygon/MATIC, BSC, etc.
- **Seed phrase** enter either random or quoted string for seed phrase
- **Number of wallets**: how many wallet addresses you want to show, starting from the first.  The private keys for each will be shown, which can be used to import in wallet software
- **Label**: Label is just a description given to the seed/wallets, and will be shown in the output (in case you want to paste data into a password manager or something)


## Syntax

```bash
npm run [eth|btc] [random|'your seed phrase here'] [num-wallets] [label]
```

## Ethereum / EVM Examples

```bash
// generate random seed phrase and show first 10 wallets with "my-crypto" as label
npm run eth random 10 'my-crypto'

// use specific phrase and show first 5 wallets with "nft-account" as label
npm run eth 'learn gadgetmarine play uncle wide depth warm sound whale unusual salute' random 5 'my-crypto'
```

## Bitcoin Examples

```bash
// generate random seed phrase and show first 10 wallets with "spending-acct" as label
npm run btc random 10 'spending-acct'

// use specific phrase and show first 5 wallets with "cold-storage" as label
npm run btc 'learn gadgetmarine play uncle wide depth warm sound whale unusual salute' random 5 'cold-storage'
```