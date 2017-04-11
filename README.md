# Ethereum Example Platform
Sample JavaScript platform for building applications with Ethereum Solidity smart contracts.

## Requirements

To run this demo locally, you actually don't need any full Ethereum library, just Node.JS. However you cannot upload smart contracts to a live blockchain

For live deployments get either eth or geth or whatever SDK you prefer.

## Setup

* `git clone https://user.id@innersource.accenture.com/scm/et-si-bc/blockchain-academy-ethereum-platform.git`
* `cd blockchain-academy-ethereum-platform/`
* `npm install`
* (Optional) `npm install truffle -g`
  

## Building and the frontend

1. `npm run testrpc` to start a test blockchain instance 
2. First run `npm run compile`, then run `npm run migrate` to deploy the contracts onto your network of choice (default "development").
3. Then run `npm run dev` to build the app via webpack and serve it on http://localhost:8080

## Deploying to a live Blockchain
@TODO use geth or eth

## Scripts

Run `npm run <command>`:
* lint: Lint code
* build: Builds application
* dev: Serves application
* serve: Serves application
* testrpc: Runs a test ethereum blockchain
* test: Runs JS and SOL tests
* compile: Compiles SOL smart contracts
* deploy: Deploys smart contracts to blockchain

## Common Errors

* **Error: Can't resolve '../build/contracts/MetaCoin.json'**

This means you haven't compiled or migrated your contracts yet. Run `npm run compile` and `npm run migrate` first.

Full error:

```
ERROR in ./app/main.js
Module not found: Error: Can't resolve '../build/contracts/MetaCoin.json' in '/Users/tim/Documents/workspace/Consensys/test3/app'
 @ ./app/main.js 11:16-59
```
