import { ThemeProvider } from 'next-themes'

import Head from 'next/head'
import $ from "jquery";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <meta charSet="utf-8" />
            </Head>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp