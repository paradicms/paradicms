import {AppProps} from "next/app";
import Head from "next/head";
import {QueryParamProvider} from "components/QueryParamProvider";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

const MyApp: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Paradicms union catalog</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryParamProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </QueryParamProvider>
    </>
  );
};

export default MyApp;
