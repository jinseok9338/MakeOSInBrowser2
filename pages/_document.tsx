import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import withStyledComponents from "styles/withStyledComponents";
import { DEFAULT_LOCALE } from "utils/constants";

export default class MyDocument extends Document {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return withStyledComponents(ctx);
  }

  public render(): JSX.Element {
    return (
      <Html lang={DEFAULT_LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <Script
          defer
          src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"
        ></Script>
      </Html>
    );
  }
}
