import React from "react";
import { Provider } from "react-redux";
import App, { AppContext } from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store/make-store.state";
import { Store } from "redux";
import StandardTheme from "../themes/standard.theme";
import AdminLayout from "../components/layout/admin.layout";
import { AdminNavItems } from "../models/nav-items.admin";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

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
        <CSSReset />
        <ColorModeProvider>
          <Provider store={store}>
            <AdminLayout navItems={AdminNavItems}>
              <Component {...pageProps} />
            </AdminLayout>
          </Provider>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default withRedux(makeStore)(HeyTeachApp);
