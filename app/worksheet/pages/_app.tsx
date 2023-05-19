import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import {NextAdapter} from "next-query-params";
import {QueryParamProvider} from "use-query-params";
import Script from "next/script";

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryParamProvider
        adapter={NextAdapter}
        options={{enableBatching: true}}
      >
        <Component {...pageProps} />
      </QueryParamProvider>
      <Script
        src="https://apis.google.com/js/api.js"
        strategy="beforeInteractive"
      />
    </>
  );
};

export default App;
