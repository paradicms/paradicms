import {AppConfiguration, Work} from "@paradicms/models";
import {
  defaultBootstrapStylesheetHref,
  getNamedModelLinks,
} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import {Navbar} from "reactstrap";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  configuration: AppConfiguration | null;
  work?: Work;
}>> = ({children, configuration, work}) => {
  const workLinks: React.ReactElement[] = work ? getNamedModelLinks(work) : [];

  const titleParts: string[] = [];
  if (configuration?.title) {
    titleParts.push(configuration.title);
  }
  if (work) {
    titleParts.push(work.label);
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
          {work ? (
            <>
              <span>&nbsp;/&nbsp;</span>
              <Link href={Hrefs.event(work)}>{work.label}</Link>
            </>
          ) : null}
          {workLinks.length > 0 ? (
            <div className="text-center" style={{fontSize: "small"}}>
              {workLinks}
            </div>
          ) : null}
        </div>
      </Navbar>
      {children}
    </>
  );
};
