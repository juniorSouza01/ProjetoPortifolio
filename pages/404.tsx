import type { NextPageWithLayout } from '@src/types/next';
import { Fragment, ReactElement } from 'react';
import { useApplicationContext } from '@src/contexts';
import { useKBar } from 'kbar';

import NextLink from 'next/link';
import { Layout } from '@src/components';
import { Button, Flex, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';

const Page:  NextPageWithLayout = () => {
    const { query } = useKBar();
    const { isMoreThanTablet } = useApplicationContext();

    const kbd_bg = useColorModeValue('mauve_light.500', 'mauve_dark.300');
    const kbd_color = useColorModeValue('mauve_light.1200', 'mauve_dark.1000');

    const mColor = useColorModeValue("#666666", 'mauve_dark.80');
    const dColor = useColorModeValue('mauve_light.200', 'mauve_dark.80');

    return (
        <Flex
        w="100%"
        h="calc(100% - 56px)"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        color="purple"
        pos="relative"
        >
            <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap="16px"
            textAlign="center"
            >
                <Heading
                px="12px"
                color={useColorModeValue('mauve_light.300', 'mauve_dark.80')}
                fontSize="48px"
                as="h1"
                >
                    4
                    <Text color="#663366" as="span">
                        zero
                    </Text>
                    4
                </Heading>
                {isMoreThanTablet ? (
                    <Flex
                    gap="8px"
                    px="12px"
                    color={dColor}
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    onClick={() => query.toggle()}
                    as={Button}
                    >
                        <Fragment>
                            Pressione{' '}
                            <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                                G
                            </Text>{' '}
                            <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                                H
                            </Text>{' '}
                                para ir ao início
                        </Fragment>
                        </Flex>
                ) : (
                    <NextLink href="/" passHref>
                        <Link 
                            minH="40px"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            border="1px solid #999999"
                            borderRadius="6px"
                            px="12px"
                            bg="#663366"
                            color={mColor}
                            _hover={{ bg: "#999999" }}

                            >
                                Toque para voltar ao início
                            </Link>
                    </NextLink>
                )}
            </Flex>
        </Flex>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Page;
