'use client';

// chakra
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.js';

// web3modal
import { Web3Modal } from '@web3modal/react';
import { chains, providers } from '@web3modal/ethereum';
if (!process.env.NEXT_PUBLIC_PROJECT_ID)
    throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
const modalConfig = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    theme: 'dark' as const,
    accentColor: 'default' as const,
    ethereum: {
        appName: 'next13-demo',
        autoConnect: false,
        chains: [
            chains.mainnet,
            chains.arbitrum,
            chains.optimism,
            chains.polygon,
        ],
        providers: [providers.walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID })]
    }
}

export function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
            <Web3Modal config={modalConfig} />
        </>
    );
}
