import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { TypographyStyle, GoogleFont } from 'react-typography';
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
const typography = new Typography(funstonTheme);
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}