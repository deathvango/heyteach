import React from "react";
import { Provider } from "react-redux";
import App, { Container, AppContext } from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store/make-store.state";
import { Store } from "redux";
import { ThemeProvider } from "@material-ui/core";
import StandardTheme from "../themes/standard.theme";

interface AppProps {
  store: Store;
}

class HeyTeachApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={StandardTheme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default withRedux(makeStore)(HeyTeachApp);
