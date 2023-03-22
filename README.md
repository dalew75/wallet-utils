# wallet-utils

Utilities for creating and accessing wallet data, seed phrases

## Syntax

```bash
npm run [eth|btc] [random|'your seed phrase here'] [num-wallets] [label]
```

## Ethereum / EVM Examples

```bash
// generate random seed phrase and show first 10 wallets with "my-crypto" as label
npm run eth random 10 'my-crypto'

// use specific phrase and show first 5 wallets with "nft-account" as label
npm run eth 'learn gadgetmarine play uncle wide depth warm sound whale unusual salute' random 10 'my-crypto'
```

## Bitcoin Examples

```bash
// generate random seed phrase and show first 10 wallets with "spending-acct" as label
npm run btc random 10 'spending-acct'

// use specific phrase and show first 5 wallets with "cold-storage" as label
npm run btc 'learn gadgetmarine play uncle wide depth warm sound whale unusual salute' random 10 'cold-storage'
```