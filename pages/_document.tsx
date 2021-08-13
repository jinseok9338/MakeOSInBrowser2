import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
            </body>
            <Script defer src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></Script>
      </Html>
    )
  }
}