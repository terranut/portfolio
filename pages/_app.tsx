import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme';
import "../stylesAbout.css";
export default function MyApp({ Component, pageProps }: AppProps) {

  return (
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}
