import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  FBPixelScript,
  FBPixelProvider,
} from "@rivercode/facebook-conversion-api-nextjs/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}

        <title>CB Beauty</title>
        <meta name="title" content="CB Beauty" />
        <link rel="icon" href="/logotipo.jpg" />
      </Head>
      <FBPixelScript />
      <FBPixelProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </FBPixelProvider>
    </>
  );
}
