import NextLink from 'next/link'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMoon,
    IconSun
} from '@tabler/icons'

import {
    Box,
    Button,
    Container,
    Flex,
    Link,
    List,
    ListItem,
    Text,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react'

const Component = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box w="100%" h="56px" pos="absolute" top="0" left="0" bg="inherit" zIndex="10">
            <Container maxW="100%" h="100%">
                <Flex w="100%" h="100%" alignItems="center" justifyContent="space=between">
                    <Flex flex="1">
                        <NextLink href="/" passHref>
                            <Link
                                fontSize="20px"
                                fontWeight="600"
                                fontFamily="Outfit, sans-serif"
                                p="2px 12px"
                                color={useColorModeValue("#333333" , 'mauve_dark.100')}
                                _hover={{
                                    borderRadius: '4px',
                                    bg: useColorModeValue("#333333" , 'mauve_dark.1000'),
                                }}
                            >
                                <Text color="#2F9C99" as="span">
                                    Junior
                                </Text>
                                    Souza
                            </Link>
                        </NextLink>
                    </Flex>
                    <Flex flex="1" justifyContent="flex-end" px="12px" gap="24px">
                        <Flex
                            gap="4px"
                            color={useColorModeValue('mauve_light.200', 'mauve_dark.100')}
                            as={List}
                        >
                            <ListItem>
                                <Flex
                                    w="40px"
                                    h="40px"
                                    d="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    _hover={{
                                        borderRadius: '4px',
                                        bg: useColorModeValue('mauve_light.800', 'mauve_dark.100'),
                                    }}
                                    as={Link}
                                    href=""
                                    target="_blank"
                                >
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    borderRadius: '4px',
                    bg: useColorModeValue('mauve_light.800', 'mauve_dark.1000'),
                  }}
                  as={Link}
                  href="https://www.linkedin.com/in/junior-souza-974932245/"
                  target="_blank"
                >
                  <IconBrandLinkedin />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    borderRadius: '4px',
                    bg: useColorModeValue('mauve_light.800', 'mauve_dark.1000'),
                  }}
                  as={Link}
                  href="https://github.com/juniorSouza01"
                  target="_blank"
                >
                  <IconBrandGithub />
                </Flex>
              </ListItem>
            </Flex>
            <Flex gap="4px" as={List}>
              <ListItem>
                <Flex
                  w="40px"
                  h="40px"
                  p="0"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="transparent"
                  color={useColorModeValue('mauve_light.200', 'mauve_dark.100')}
                  _hover={{
                    borderRadius: '4px',
                    bg: useColorModeValue('mauve_light.800', 'mauve_dark.1000'),
                  }}
                  as={Button}
                  onClick={toggleColorMode}
                >
                  {colorMode === 'dark' ? <IconMoon /> : <IconSun />}
                </Flex>
              </ListItem>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Component