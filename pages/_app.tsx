import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Travel</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
