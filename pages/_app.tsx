import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, } from '@material-ui/core/styles';
import defaultTheme from "../styles/defaultTheme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
