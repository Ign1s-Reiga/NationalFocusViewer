import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function app({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>NationalFocus Viewer</title>
                <meta name="description" content="support your modding."/>
                <link rel={'icon'} href={'/icon.png'}/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default app
