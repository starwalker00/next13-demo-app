'use client';

// chakra-ui
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './(config)/chakra-theme';

// wagmi
import { WagmiConfig } from 'wagmi';
import { wagmiClient } from './(config)/web3';

// rainbowkit
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains } from './(config)/web3';

export function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <ChakraProvider theme={theme}>
                        {children}
                    </ChakraProvider>
                </RainbowKitProvider>
            </WagmiConfig>

        </>
    );
}
