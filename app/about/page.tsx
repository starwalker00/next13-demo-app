'use client';

import { Container } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/layout';

export default function About() {
    return (
        <Container as="main" centerContent>
            <Heading>
                About page.
            </Heading>
            <Text>Nothing interesting here.</Text>
        </Container >
    )
}
