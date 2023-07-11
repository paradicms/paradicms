import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "leaflet/dist/leaflet.css";
import {configureLogging} from "@paradicms/next";

configureLogging();

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
