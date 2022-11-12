'use client';

import { Container } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function ConnectWalletAuth() {
    const account = useAccount()
    return (
        <Container as="div" centerContent>
            {account.isConnected ? <h1>{account.address}</h1> : null}
            <ConnectButton />
        </Container>
    );
}