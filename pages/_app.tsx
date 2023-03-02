import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Boid from '@/src/Boid'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Boid></Boid>
      <Component {...pageProps} />
    </>
  )
}
