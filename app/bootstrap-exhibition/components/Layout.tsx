import * as React from "react";
import {Hrefs} from "lib/Hrefs";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import {STYLESHEET_HREF_DEFAULT} from "@paradicms/bootstrap";
import {Configuration} from "@paradicms/models";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: {readonly title: string};
  configuration: Configuration;
  currentWork?: {readonly title: string; readonly uri: string};
  nextWork?: {readonly uri: string};
  previousWork?: {readonly uri: string};
}>> = ({
  collection,
  children,
  configuration,
  currentWork,
  nextWork,
  previousWork,
}) => (
  <>
    <Head>
      <title>
        {collection.title + (currentWork ? " - " + currentWork.title : "")}
      </title>
      <link
        rel="stylesheet"
        href={configuration.bootstrapStylesheetHref ?? STYLESHEET_HREF_DEFAULT}
      />
    </Head>
    <Navbar className="navbar-light py-0">
      {previousWork ? (
        <Nav className="navbar mr-auto">
          <NavItem className="align-top">
            <Link href={Hrefs.work(previousWork.uri)} passHref>
              <NavLink style={{fontSize: "xx-large"}}>‹</NavLink>
            </Link>
          </NavItem>
        </Nav>
      ) : null}
      <NavbarBrand className="navbar-brand mx-auto">
        <Link href={Hrefs.home}>{collection.title}</Link>
        {currentWork ? (
          <>
            <span>&nbsp;/&nbsp;</span>
            <Link href={Hrefs.work(currentWork.uri)}>{currentWork.title}</Link>
          </>
        ) : null}
      </NavbarBrand>
      {nextWork ? (
        <Nav className="navbar ml-auto h-100">
          <NavItem>
            <Link href={Hrefs.work(nextWork.uri)} passHref>
              <NavLink style={{fontSize: "xx-large"}}>›</NavLink>
            </Link>
          </NavItem>
        </Nav>
      ) : null}
    </Navbar>
    {children}
  </>
);
