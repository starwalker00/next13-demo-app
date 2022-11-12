'use client';

import { useAccount } from 'wagmi';
import ConnectWalletAuth from './ConnectWalletAuth';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useLogin from '../hooks/useLogin';
import { Container, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Auth() {
    const account = useAccount();
    const { login, disconnect, isLoggedIn } = useLogin(account?.address);
    return (
        <Container as="div" centerContent>
            { /* if the user has not yet connected their wallet, show a connect button */}
            {
                !account.isConnected && <ConnectButton />
            }
            { /* if the user has connected their wallet but has not yet authenticated, show them a login button */}
            {
                account.isConnected && !isLoggedIn && (
                    <Button onClick={login}>Login</Button>
                )
            }
            { /* once the user has authenticated, show them a success message */}
            {
                account.isConnected && isLoggedIn && (
                    <>
                        <h2>Logged in!</h2>
                        <Button onClick={disconnect}>Disconnect</Button>
                    </>
                )
            }
        </Container>
    )
}