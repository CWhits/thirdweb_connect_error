import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {
  Ethereum,
  Polygon,
  Binance,
  Goerli,
  Mumbai,
  BinanceTestnet,
  Localhost,
} from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      supportedChains={[
        Ethereum,
        Polygon,
        Binance,
        Goerli,
        Mumbai,
        BinanceTestnet,
        Localhost,
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
