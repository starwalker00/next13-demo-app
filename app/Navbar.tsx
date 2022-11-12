'use client';

import NextLink from 'next/link';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NextLogoIcon } from './NextLogoIcon';

type Item = {
    name: string;
    slug: string;
    description?: string;
};

const navItems: Item[] =
    [
        {
            name: 'Home',
            slug: '/',
            description: '',
        },
        // {
        //     name: 'ExplorerProfile',
        //     slug: '/explorer/profiles',
        //     description: '',
        // },
        // {
        //     name: 'ExplorerPublications',
        //     slug: '/explorer/publications',
        //     description: '',
        // },
        {
            name: 'About',
            slug: '/about',
            description: '',
        }
    ];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><NextLogoIcon /></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {navItems.map((item) => {
                                return (
                                    <NavItem key={item.slug} item={item} />
                                );
                            })}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {navItems.map((item) => {
                                return (
                                    <NavItem key={item.slug} item={item} />
                                );
                            })}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

function NavItem({ item }: { item: Item }) {
    return (
        <NextLink href={item.slug} legacyBehavior passHref>
            <Link>{item.name}</Link>
        </NextLink>
    );
}