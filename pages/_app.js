/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>David Fernando</title>
        <meta name="description" content="Portfolio desenvolvedor front end" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>       
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
