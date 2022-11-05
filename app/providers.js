'use client';

// Chakra
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.js';

export function Providers({ children }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}
