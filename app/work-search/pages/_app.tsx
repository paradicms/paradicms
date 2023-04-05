import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "leaflet/dist/leaflet.css";
import {NextAdapter} from "next-query-params";
import {QueryParamProvider} from "use-query-params";

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
    </>
  );
};

export default App;
