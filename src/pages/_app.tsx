import { AppProps } from 'next/app'
import Head from 'next/Head'
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Footer } from '../components/Footer'

import { theme } from '../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}  >
      <Head>
        <title>
          PRG | Table Master
        </title>
        <link rel="shortcut icon" href="/images/iconPage.png" type="image/png" />
      </Head>
 

        <Component {...pageProps} />

      <Footer />
    </ChakraProvider>)
}

export default MyApp
