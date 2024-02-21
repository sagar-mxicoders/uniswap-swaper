To start the demo:

```bash
yarn          # install dependencies
yarn start    # run the development server
# or
npm install        # install dependencies
npm run start # run the development server
```

Navigate to [http://localhost:3000](http://localhost:3000) to see the widget.

---

The `SwapWidget` component is passed everything it needs to render:

- `jsonRpcEndpoint`: a JSON-RPC endpoint, in this case I have created my own jsonRpc endpoint from infura
- `tokenList`: a TokenList; in this case "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
- `provider`: an EIP1193 Provider, in this case from `connectors.ts` only Metamask

In addition, it is passed these optional props to flesh out the demo:

- `onConnectWallet`: a callback to invoke when a user clicks "Connect your wallet"
- `defaultInputTokenAddress`: the default input token address, or "NATIVE" for Ether
- `defaultInputAmount`: the default input token amount
- `defaultOutputTokenAddress`: the default output token amount, in this case the address of the Uniswap (UNI) token
