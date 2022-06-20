import Document, { Head, Html, Main, NextScript } from 'next/document'

class document extends Document {
    render () {
        return (
            <Html lang={'ja'}>
                <Head/>
                <body>
                    <script></script>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
