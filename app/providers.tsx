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

// apollo
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../core/apollo/apollo-client';

export function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <ApolloProvider client={apolloClient}>
                        <ChakraProvider theme={theme}>
                            {children}
                        </ChakraProvider>
                    </ApolloProvider>
                </RainbowKitProvider>
            </WagmiConfig>

        </>
    );
}
