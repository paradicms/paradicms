import * as React from "react";
import {Hrefs} from "lib/Hrefs";
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import {
  Collection,
  Configuration,
  defaultConfiguration,
  Work,
} from "@paradicms/models";

const textStyle: React.CSSProperties = {fontSize: "xx-large"};

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: Collection;
  configuration: Configuration;
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
  const currentWorkLinks: React.ReactNodeArray = [];
  if (currentWork) {
    for (const link of [
      {
        href: currentWork.wikidataConceptUri,
        text: "Wikidata",
      },
      {
        href: currentWork.wikipediaUrl,
        text: "Wikipedia",
      },
    ]) {
      if (!link.href) {
        continue;
      }
      if (currentWorkLinks.length > 0) {
        currentWorkLinks.push(
          <span key={currentWorkLinks.length}>&nbsp;&bull;&nbsp;</span>
        );
      }
      currentWorkLinks.push(
        <a href={link.href} key={currentWorkLinks.length}>
          {link.text}
        </a>
      );
    }
  }

  return (
    <>
      <Head>
        <title>
          {collection.title + (currentWork ? " - " + currentWork.title : "")}
        </title>
        <link
          rel="stylesheet"
          href={
            configuration.bootstrapStylesheetHref ??
            defaultConfiguration.bootstrapStylesheetHref!
          }
        />
      </Head>
      <Navbar className="navbar-light py-0">
        <Nav className="navbar mr-auto">
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
        </div>
        <Nav className="navbar ml-auto h-100">
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
      {currentWorkLinks.length > 0 ? (
        <div className="text-center" style={{fontSize: "small"}}>
          {currentWorkLinks}
        </div>
      ) : null}
      {children}
    </>
  );
};
