import {AppProps} from "next/app";
import Head from "next/head";
import {QueryParamProvider} from "@paradicms/next";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "leaflet/dist/leaflet.css";

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryParamProvider>
        <Component {...pageProps} />
      </QueryParamProvider>
    </>
  );
};

export default App;
