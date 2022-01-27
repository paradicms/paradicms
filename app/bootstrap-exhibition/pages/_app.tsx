import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import "react-vertical-timeline-component/style.min.css";

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
