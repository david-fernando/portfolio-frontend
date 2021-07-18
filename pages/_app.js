import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>David Fernando</title>
        <meta name="description" content="Portfolio desenvolvedor front end" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" /> 
      </Head>       
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
