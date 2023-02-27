/* eslint-disable react/react-in-jsx-scope */

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { ApplicationContextProvider } from '@src/contexts/application.context';
import { CommandPalette } from '@src/providers';
import Head from 'next/head';
import { SEOConfig } from '@src/config';
import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import React from 'react';

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

function Application({ Component, pageProps }: MyAppProps) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <DefaultSeo {...SEOConfig} />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ApplicationContextProvider>
                <CommandPalette>{getLayout(<Component {...pageProps} />)}</CommandPalette>
            </ApplicationContextProvider>
        </>
    );
}

export default Application;