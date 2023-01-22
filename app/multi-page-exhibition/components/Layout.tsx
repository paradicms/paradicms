import * as React from "react";
import {Hrefs} from "lib/Hrefs";
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import {Collection, Work} from "@paradicms/models";
import {
  defaultBootstrapStylesheetHref,
  getNamedModelLinks,
} from "@paradicms/react-dom-components";
import {MultiPageExhibitionAppConfiguration} from "../lib/MultiPageExhibitionAppConfiguration";

const textStyle: React.CSSProperties = {fontSize: "xx-large"};

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: Collection;
  configuration: MultiPageExhibitionAppConfiguration;
  currentWork?: Work;
  nextWork?: {readonly uri: string};
  previousWork?: {readonly uri: string};
}>> = ({
  collection,
  children,
  configuration,
  currentWork,
  nextWork,
  previousWork,
}) => {
  const currentWorkLinks: React.ReactElement[] = currentWork
    ? getNamedModelLinks(currentWork)
    : [];

  return (
    <>
      <Head>
        <title>
          {collection.title + (currentWork ? " - " + currentWork.title : "")}
        </title>
        <link
          rel="stylesheet"
          href={configuration.stylesheetHref ?? defaultBootstrapStylesheetHref}
        />
      </Head>
      <Navbar className="navbar-light py-0">
        <Nav
          className="navbar me-auto"
          style={{
            borderWidth: "0 !important",
            visibility: previousWork ? "visible" : "hidden",
          }}
        >
          <NavItem className="align-top">
            {previousWork ? (
              <Link href={Hrefs.work(previousWork.uri)} passHref>
                <NavLink style={textStyle}>‹</NavLink>
              </Link>
            ) : (
              <span style={textStyle}>&nbsp;</span>
            )}
          </NavItem>
        </Nav>
        <div className="navbar-brand mx-auto" style={textStyle}>
          <Link href={Hrefs.home}>{collection.title}</Link>
          {currentWork ? (
            <>
              <span>&nbsp;/&nbsp;</span>
              <Link href={Hrefs.work(currentWork.uri)}>
                {currentWork.title}
              </Link>
            </>
          ) : null}
          {currentWorkLinks.length > 0 ? (
            <div className="text-center" style={{fontSize: "small"}}>
              {currentWorkLinks}
            </div>
          ) : null}
        </div>
        <Nav
          className="navbar ms-auto h-100"
          style={{
            borderWidth: "0 !important",
            visibility: nextWork ? "visible" : "hidden",
          }}
        >
          <NavItem>
            {nextWork ? (
              <Link href={Hrefs.work(nextWork.uri)} passHref>
                <NavLink style={textStyle}>›</NavLink>
              </Link>
            ) : (
              <span style={textStyle} />
            )}
          </NavItem>
        </Nav>
      </Navbar>
      {children}
    </>
  );
};
