import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../styles/defaultTheme";
import React from "react";
import { SessionProvider } from "contexts/session";
import { FileSystemProvider } from "contexts/fileSystem";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FileSystemProvider>
      <SessionProvider>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </FileSystemProvider>
  );
}
export default MyApp;
