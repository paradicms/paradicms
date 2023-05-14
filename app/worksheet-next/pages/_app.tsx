import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import {NextAdapter} from "next-query-params";
import {QueryParamProvider} from "use-query-params";
import {Secrets} from "~/Secrets";
import {GoogleApiProvider} from "react-gapi";

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GoogleApiProvider clientId={Secrets.GOOGLE_CLIENT_ID}>
        <QueryParamProvider
          adapter={NextAdapter}
          options={{enableBatching: true}}
        >
          <Component {...pageProps} />
        </QueryParamProvider>
      </GoogleApiProvider>
    </>
  );
};

export default App;
