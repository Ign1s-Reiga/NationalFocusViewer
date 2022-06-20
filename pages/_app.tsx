import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import { CssBaseline } from '@mui/material';
import React from 'react';

const clientSideEmotionCache = createEmotionCache();
interface AppProps extends NextAppProps {
    emotionCache?: EmotionCache;
}

function app(props: AppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>NationalFocus Viewer</title>
                <meta name="description" content="support your modding."/>
                <link rel={'icon'} href={'/icon.png'}/>
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </CacheProvider>
    )

}

export default app
