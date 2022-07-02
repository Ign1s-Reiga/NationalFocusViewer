import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import { CssBaseline } from '@mui/material';
import React, { useEffect } from 'react';

const clientSideEmotionCache = createEmotionCache();
interface AppProps extends NextAppProps {
    emotionCache?: EmotionCache;
}

function App(props: AppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    const [showScreen, setShowScreen] = React.useState(false);

    useEffect(() => {
        setShowScreen(true);
    }, []);

    return (
        <>
            {
                showScreen ?
                    <CacheProvider value={emotionCache}>
                        <Head>
                            <title>NationalFocus Viewer</title>
                            <meta name="description" content="support your modding."/>
                            <link rel={'icon'} href={'/icon.png'}/>
                        </Head>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </CacheProvider>
                    : ''
            }
        </>
    )

}

export default App
