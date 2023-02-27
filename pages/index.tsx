import type { NextPageWithLayout } from '@src/types/next'
import { Fragment, ReactElement } from 'react'
import { useApplicationContext } from '@src/contexts'
import { useKBar } from 'kbar'
import { Layout } from '@src/components'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const Page: NextPageWithLayout = () => {
  const { query } = useKBar()
  const { isMoreThanTablet } = useApplicationContext()

  const kbd_bg = useColorModeValue('mauve_light.400', 'mauve_dark.300')
  const kbd_color = useColorModeValue('mauve_light.1200', 'mauve_dark.1000')

  return (
    <Box w="100%" pos="relative">
      <Container maxW="992px">
        <Flex
          w="100%"
          minH="100vh"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Flex
            flexDir="column"
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap="20px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              px="12px"
              color={useColorModeValue('mauve_light.100', 'mauve_dark.80')}
              fontSize="48px"
              as="h1"
            >
              Junior Souza
            </Heading>
            <Flex flexDir="column" px="12px" gap="10px">
              <Text
                color={useColorModeValue('mauve_light.200', 'mauve_dark.80')}
                fontWeight="bold"
              >
                <div style={{ float: "right" }}>
                  <img src="/img/hero-illustration.svg" width="500px" height="500px" alt="Hero illustration"/>
                </div>

                Front-end Developer.
              </Text>
              <Text
                maxW="510px"
                color={useColorModeValue('mauve_light.400', 'mauve_dark.200')}
                fontWeight="bold"
              >
                Estudando desenvolvimento front-end utilizando React.js para aplicações Web e React Native para mobile
              </Text>
            </Flex>
            <Flex
              gap="8px"
              px="12px"
              bg={{
                base: "#333333",
                lg: 'transparent',
              }}
              border={{
                base: '1px solid #666666',
                lg: 'none',
              }}
              color={{
                base: useColorModeValue("#808080", 'mauve_dark.80'),
                lg: useColorModeValue('mauve_light.200', 'mauve_dark.80'),
              }}
              _hover={{
                bg: {
                  base: "#666666",
                  lg: 'none',
                },
              }}
              onClick={() => query.toggle()}
              as={Button}
            >
              {isMoreThanTablet ? (
                <Fragment>
                  Pressione{' '}
                  <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                    ctrl
                  </Text>{' '}
                  <Text borderRadius="2px" bg={kbd_bg} color={kbd_color} px="6px" as="kbd">
                    k
                  </Text>{' '}
                  para navegar
                </Fragment>
              ) : (
                <Fragment>Toque para navegar</Fragment>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
