
import './App.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
require("@solana/wallet-adapter-react-ui/styles.css");


function App() {
const network = WalletAdapterNetwork.Devnet;
const endpoint = useMemo(() => clusterApiUrl(network), [network]);
const wallets = useMemo(
  () => [
    new PhantomWalletAdapter(),
    new GlowWalletAdapter()
  ],
  [network]
);


  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className='app'>
            <WalletMultiButton/>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
