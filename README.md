<h1 align="center">Welcome to livecrypto 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/N-liraj-khanna/Live-Crypto-CLI#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/N-liraj-khanna/Live-Crypto-CLI/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/N-liraj-khanna/Live-Crypto-CLI/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/N-liraj-khanna/livecrypto" />
  </a>
</p>

## About
___

### A Live Cryptocurrency Application with Nomics API in the Command Line Interface(CLI) using Node JS.

> This is a Cryptocurrency application that gives current prices of the specified (Default: Bitcoin, Ethereum, Dogecoin) and the specified currency format(Default: INR) with the nomics API using axios npm package in the Command Line Interface(CLI) using commander.js and inquirer.js npm package with some fancy colors on it using colors package. Also securely stores your API_KEY in configstore package with high level security.

### 🏠 [Homepage](https://github.com/N-liraj-khanna/Live-Crypto-CLI#readme)

## Install
___

```sh
git clone https://github.com/N-liraj-khanna/Live-Crypto-CLI.git

cd Live-Crypto-CLI/

npm install
```

## Link to the bin directory

```sh
npm link
```

## Help Commands

```sh
livecrypto -h
livecrypto key -h
livecrypto check -h

```

## Commands

```sh
# Version
livecrypto -V

# API_Key Set, Show, Remove Commands
livecrypto key set # Here goes your API_KEY
livecrypto key show
livecrypto key remove

# Crypto Price Check Commands
livecrypto check price

# To Check for Specific Coins (default: BTC,ETH,DOGE)
livecrypto check --coin=BTC,XRP

# To view in different currency formats (Default: INR)
livecrypto check --cur=EUR

# Can Specify both of 'em
livecrypto check --coin=BTC --cur=USD

```
## Screenshots
____
![1.png]([http://url/to/img.png](https://github.com/N-liraj-khanna/Live-Crypto-CLI/tree/master/Screenshots/1.png))

![2.png]([http://url/to/img.png](https://github.com/N-liraj-khanna/Live-Crypto-CLI/tree/master/Screenshots/1.png))

## Built Using 
___


- [Inquirer](https://www.npmjs.com/package/inquirer) - Inquirer is the easiest way to user input through the terminal.
- [axios](https://www.npmjs.com/package/axios) - Best way to get, post, put, delete any data from any API.

- [colors](https://www.npmjs.com/package/colors) - A Super cool package that throws color in your terminal wherever, whenever you want.
- [configstore](https://www.npmjs.com/package/configstore) - Configstore helps you to store any user specific personal data with high level security.
- [Commander.js](https://www.npmjs.com/package/commander) - Commander JS allows you to easily play with your terminal, creates bin path as you use any CLI npm package.

## Author
___


👤 **N Liraj Khanna**

* Website: https://github.com/N-liraj-khanna
* Github: [@N-liraj-khanna](https://github.com/N-liraj-khanna)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/n-liraj-khanna-227aa01ba\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/n-liraj-khanna-227aa01ba\/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/N-liraj-khanna/Live-Crypto-CLI/issues). You can also take a look at the [contributing guide](https://github.com/N-liraj-khanna/Live-Crypto-CLI/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [N Liraj Khanna](https://github.com/N-liraj-khanna).<br />
This project is [ISC](https://github.com/N-liraj-khanna/Live-Crypto-CLI/blob/master/LICENSE) licensed.

