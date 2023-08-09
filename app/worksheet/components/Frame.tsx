import {Navbar} from "~/components/Navbar";
import * as React from "react";
import {JsonAppConfiguration} from "@paradicms/models";
import {defaultBootstrapStylesheetHref} from "@paradicms/react-dom-components";
import Head from "next/head";

export const Frame: React.FunctionComponent<React.PropsWithChildren<{
  configuration: JsonAppConfiguration | null;
}>> = ({configuration, children}) => (
  <>
    <Head>
      <title>{configuration?.title ?? "Worksheet"}</title>
      <link
        rel="stylesheet"
        href={configuration?.stylesheet ?? defaultBootstrapStylesheetHref}
      />
    </Head>
    <div className="mx-2 pt-2">
      <Navbar />
      {children}
    </div>
  </>
);
