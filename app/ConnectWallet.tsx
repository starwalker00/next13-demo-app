'use client';

import { Container } from '@chakra-ui/react'
import { Web3Button, useAccount } from '@web3modal/react';

export default function ConnectWallet() {
    const { account } = useAccount()

    return (
        <Container as="div" centerContent>
            {account.isConnected ? <h1>{account.address}</h1> : null}
            <Web3Button />
        </Container>
    );
}