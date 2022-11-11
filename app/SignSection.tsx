'use client';

import { Container } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useAccount, useSignMessage } from 'wagmi';

export default function SignSection() {
    const account = useAccount()
    const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
        message: 'gm wagmi frens',
    })
    if (!account.isConnected) {
        return (
            <Container as="div" centerContent>
                <div>Account not connected</div>
            </Container>
        )
    }
    return (
        <Container as="div" centerContent>
            <Button disabled={isLoading} onClick={() => signMessage()}>
                Sign message
            </Button>
            {isSuccess && <div>Signature: <p>{data}</p></div>}
            {isError && <div>Error signing message</div>}
        </Container>
    );
}