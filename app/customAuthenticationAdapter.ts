'use client';
// https://www.rainbowkit.com/docs/custom-authentication

import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';
import { useLogin } from 'hooks/useLogin';

// const { login, isLoggedIn } = useLogin();

const authenticationAdapter = createAuthenticationAdapter({
    getNonce: async () => {
        const response = await fetch('/api/nonce');
        return await response.text();
    },

    createMessage: ({ nonce, address, chainId }) => {
        return new SiweMessage({
            domain: window.location.host,
            address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId,
            nonce,
        });
    },

    getMessageBody: ({ message }) => {
        return message.prepareMessage();
    },

    verify: async ({ message, signature }) => {
        const verifyRes = await fetch('/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, signature }),
        });

        return Boolean(verifyRes.ok);
    },

    signOut: async () => {
        await fetch('/api/logout');
    },
});
