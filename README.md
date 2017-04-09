# Ethereum Tutorial

This is a quick guide on how to get Ethereum running on your machine and create a DApp (Decentralized Application)

## Installation

### Mac OSX

1. `brew update && brew upgrade`
2. `brew tap ethereum/ethereum && brew install ethereum`

### Windows

1. Download binary `https://geth.ethereum.org/downloads/`
2. Extract
3. chdir <path to extracted binary>
4. open geth.exe

### Linux

1. sudo apt-get install software-properties-common
2. sudo add-apt-repository -y ppa:ethereum/ethereum
3. sudo apt-get update
4. sudo apt-get install ethereum

## Starting

### Setup

1. `git clone https://github.com/1337programming/ethereum-example-dapp`
2. `cd ethereum-example-dapp/`
3. `npm install`

For testing, run `npm run testrpc` first then run `truffle` commands.
