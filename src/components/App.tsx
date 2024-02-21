import { useCallback, useRef } from 'react'
import { SwapWidget } from '@uniswap/widgets'

import '@uniswap/widgets/fonts.css'

import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'
import Web3Connectors from './Web3Connectors'
//@ts-ignore
import styles from '../styles/Home.module.css'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

export default function App() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  const provider = useActiveProvider()

  /*NOTE: This fetch Swaps Function we have implement for get all the swaps but it didn't worked */
  // async function fetchSwaps(address: any) {
  //   const query = `
  //     {
  //       swaps(where: {to: "${address}"}) {
  //         id
  //         pair {
  //           token0 {
  //             id
  //             symbol
  //           }
  //           token1 {
  //             id
  //             symbol
  //           }
  //         }
  //         amount0In
  //         amount1In
  //         amount0Out
  //         amount1Out
  //         to
  //         timestamp
  //       }
  //     }
  //   `

  //   const response = await fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ query }),
  //   })

  //   const data = await response.json()

  //   return data.data.swaps
  // }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Uniswap Swap Widget</h1>

        <div className={styles.demo}>
          <div className={styles.connectors} ref={connectors} tabIndex={-1}>
            <Web3Connectors />
          </div>

          <div className={styles.widget}>
            <SwapWidget
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
              defaultOutputTokenAddress={UNI}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
