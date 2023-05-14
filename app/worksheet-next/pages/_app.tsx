import {AppProps} from "next/app";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import {Exception} from "worksheet/src/ts/Exception";
import {loadGapiClient} from "~/loadGapiClient";
import {FatalErrorModal} from "~/components/FatalErrorModal";
import {NextAdapter} from "next-query-params";
import {QueryParamProvider} from "use-query-params";

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  const [exception, setException] = useState<Exception | null>(null);
  const [gapiClientLoaded, setGapiClientLoaded] = useState<boolean>(false);

  useEffect(() => {
    console.info("loading GAPI client");
    loadGapiClient().then(() => setGapiClientLoaded(true), setException);
  }, []);

  if (exception) {
    return <FatalErrorModal exception={exception} />;
  } else if (!gapiClientLoaded) {
    return null;
  }

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
