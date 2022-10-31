# penguin-wallet

![Penguin Wallet](https://notiboy.com/penguinwallet.png)

## Warning
Penguin Wallet is currently in the alpha development phase and subjects to changes. Before proceeding, please be aware of the following:

- Penguin Labs is not liable for any potential damage, loss of data/files arising from the use of the wallet.

## Manual Build for Development

### Pre-requirements

This project requires [Node.js](https://nodejs.org/) to build, [.node-version](./.node-version) indicates the version currently using. 

You can either install Node.js globally or use any of the Node Version Manager which respect [.node-version](./.node-version) in [this list](https://github.com/shadowspawn/node-version-usage).

### Installation

```sh
npm install
```
Installs all the needed dependencies

### Development & Builds Processes

#### Electron Target 💻

```sh
npm run electron:serve
```
Runs the Electron app in the development mode.

The Electron app will reload if you make edits in the electron directory.
You will also see any lint errors in the console.

```sh
npm run electron:build
```
Builds the Electron app package for production to the dist folder.

The app is ready to be distributed!



