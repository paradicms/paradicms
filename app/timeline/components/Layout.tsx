import {AppConfiguration, Event} from "@paradicms/models";
import {defaultBootstrapStylesheetHref} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import {Navbar} from "reactstrap";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  configuration: AppConfiguration | null;
  event?: Event;
}>> = ({children, configuration, event}) => {
  const titleParts: string[] = [];
  if (configuration?.title) {
    titleParts.push(configuration.title);
  }
  if (event) {
    titleParts.push(event.label);
  }
  if (titleParts.length === 0) {
    titleParts.push("Timeline");
  }

  return (
    <>
      <Head>
        <title>{titleParts.join(" - ")}</title>
        <link
          rel="stylesheet"
          href={configuration?.stylesheet ?? defaultBootstrapStylesheetHref}
        />
      </Head>
      <Navbar className="navbar-light py-0">
        <div className="navbar-brand mx-auto" style={{fontSize: "xx-large"}}>
          {event ? (
            <>
              <span>&nbsp;/&nbsp;</span>
              <Link href={Hrefs.event(event)}>{event.label}</Link>
            </>
          ) : null}
        </div>
      </Navbar>
      {children}
    </>
  );
};
