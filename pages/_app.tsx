import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function app({ Component, pageProps }: AppProps) {
    return <Component {...pageProps}/>

}

export default app
