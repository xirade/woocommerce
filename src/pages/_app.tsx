import GlobalStyle from "../styles/globals";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { store } from "../store/store";
import { Provider as ReduxProvider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
