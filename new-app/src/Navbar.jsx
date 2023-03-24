import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
export const Navbar = () => {
  return (
    <div className='nav'>
        <WalletMultiButton/>
    </div>
  )
}
