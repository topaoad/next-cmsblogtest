import { createGetInitialProps } from "@mantine/next";
import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";

class MyDocument extends Document {
  render() {
  
    return (
      <Html>
        <Head>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>

            <body className="">
            {/* <body> */}
              <Main />
              <NextScript />
            </body>
    
      </Html>
    );
  }
}

export default MyDocument;
