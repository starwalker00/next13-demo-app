import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { getDefaultWallets } from '@rainbow-me/rainbowkit';
export const { chains, provider } = configureChains(
    [
        chain.mainnet,
        chain.polygon,
        chain.optimism,
        chain.arbitrum
    ],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'next13-demo',
    chains
});

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});
