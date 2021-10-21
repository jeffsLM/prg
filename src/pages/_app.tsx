import { AppProps } from 'next/app'
import Head from 'next/Head'
import { ChakraProvider } from '@chakra-ui/react';


import { theme } from '../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>
          PRG | Table Master
        </title>
        <link rel="shortcut icon" href="/images/iconPage.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
