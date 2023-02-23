import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraTheme } from '@src/theme';

export default function Document() {
    return(
        <Html lang='pt-br'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
                  rel="stylesheet"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                  rel="stylesheet"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
                  rel="stylesheet"
                />
            </Head>
            <body>
                <ColorModeScript initialColorMode={ChakraTheme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}