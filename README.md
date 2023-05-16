# Project Name

thirdweb_connect_error

## Description

This project is a minimal reproduction of a problem experienced when the provider tries to connect.

## Reproducing the error

Follow these steps to reproduce the error:

1. Clone the project: `git clone <repository-url>`
2. Navigate into the project directory: `cd thirdweb_connect_error`
3. Install the dependencies: `npm install`
4. Start the project: `npm run dev`
5. Make sure no other Chrome window is open.
6. Open a new Chrome window and navigate to `localhost:3000`
7. Connect the wallet and log into MetaMask.
8. Quit Chrome completely from the system menu.
9. Launch Chrome again and navigate to `localhost:3000`
10. If the button is showing the loading indicator, refresh/reload the page.

At this point, you should see the error.

## Error Details

Unhandled Runtime Error
Error: Failed to auto connect to the wallet.

Call Stack
MetaMaskWallet.\_connect2
node_modules/@thirdweb-dev/wallets/dist/base-901ad5ac.browser.esm.js (141:0)
async eval
node_modules/@thirdweb-dev/react-core/dist/useTransactions-3346bed6.browser.esm.js (538:0)

## Environment

Provide any relevant details about the environment where the problem occurs, like:

- OS: 13.3.1 (a) (22E772610a)
- Node.js version: v18.15.0
- npm version: 9.6.3
- Chrome version: Version 113.0.5672.92 (Official Build) (x86_64)
- MetaMask version: 10.29.0
