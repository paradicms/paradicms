import {configureLogging} from "@paradicms/next";
import "leaflet/dist/leaflet.css";
import {NextAdapter} from "next-query-params";
import {AppProps} from "next/app";
import Head from "next/head";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {QueryParamProvider} from "use-query-params";

// if (process.env.NODE_ENV === "development") {
//   if (typeof window !== "undefined") {
//     const whyDidYouRender = require("@welldone-software/why-did-you-render");
//     whyDidYouRender(React, {
//       trackAllPureComponents: true,
//     });
//   }
// }

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
