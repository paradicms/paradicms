import {AppConfiguration, Collection, Work} from "@paradicms/models";
import {
  defaultBootstrapStylesheetHref,
  getNamedModelLinks,
} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import {Nav, NavItem, NavLink, Navbar} from "reactstrap";
import invariant from "ts-invariant";

const textStyle: React.CSSProperties = {fontSize: "xx-large"};

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: Collection | null;
  configuration: AppConfiguration | null;
  currentWork?: Work;
  nextWork?: {readonly key: string};
  previousWork?: {readonly key: string};
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

  const titleParts: string[] = [];
  if (collection) {
    titleParts.push(collection.label);
  }
  if (currentWork) {
    titleParts.push(currentWork.label);
  }
  invariant(titleParts.length > 0);

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
        <Nav
          className="navbar me-auto"
          style={{
            borderWidth: "0 !important",
            visibility: previousWork ? "visible" : "hidden",
          }}
        >
          <NavItem className="align-top">
            {previousWork ? (
              <Link
                href={Hrefs.work({
                  workKey: previousWork.key,
                })}
                passHref
              >
                <NavLink style={textStyle}>‹</NavLink>
              </Link>
            ) : (
              <span style={textStyle}>&nbsp;</span>
            )}
          </NavItem>
        </Nav>
        <div className="navbar-brand mx-auto" style={textStyle}>
          {collection ? (
            <Link href={Hrefs.home}>{collection.label}</Link>
          ) : null}
          {currentWork ? (
            <>
              <span>&nbsp;/&nbsp;</span>
              <Link
                href={Hrefs.work({
                  workKey: currentWork.key,
                })}
              >
                {currentWork.label}
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
              <Link
                href={Hrefs.work({
                  workKey: nextWork.key,
                })}
                passHref
              >
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
