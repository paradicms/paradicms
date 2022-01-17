import * as React from "react";
import {Hrefs} from "lib/Hrefs";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
} from "reactstrap";
import {NavbarSearchForm} from "@paradicms/bootstrap";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import {
  AppConfiguration,
  defaultAppConfiguration,
} from "@paradicms/configuration";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: {readonly title: string; readonly uri: string};
  configuration: AppConfiguration;
  cardHeaderLinks?: React.ReactNodeArray;
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({
  cardHeaderLinks,
  cardTitle,
  collection,
  children,
  documentTitle,
  configuration,
  onSearch: onSearchUserDefined,
}) => {
  const router = useRouter();

  // @ts-ignore
  let onSearch: ((text: string) => void) | undefined;
  if (configuration.search) {
    if (onSearchUserDefined) {
      onSearch = onSearchUserDefined;
    } else {
      onSearch = (text: string) => {
        const href = Hrefs.collection({
          filters: configuration.search!.filters ?? [],
          text: text,
        }).toString();
        console.info("redirecting to search href", href);
        router.push(href);
        return null;
      };
    }
  }

  return (
    <>
      <Head>
        <title>
          {collection.title + (documentTitle ? " - " + documentTitle : "")}
        </title>
        <link
          rel="stylesheet"
          href={
            configuration.bootstrapStylesheetHref ??
            defaultAppConfiguration.bootstrapStylesheetHref!
          }
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
      </Head>
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand className="me-auto" tag="div">
                <Link href={Hrefs.home}>{collection.title}</Link>
              </NavbarBrand>
              {onSearch ? (
                <Nav navbar>
                  <NavItem>
                    <NavbarSearchForm onSearch={onSearch} />
                  </NavItem>
                </Nav>
              ) : null}
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              {cardTitle || documentTitle ? (
                <CardHeader className="text-center" tag="h3">
                  <div>{cardTitle ?? documentTitle}</div>
                  {cardHeaderLinks && cardHeaderLinks.length > 0 ? (
                    <div className="mt-1" style={{fontSize: "x-small"}}>
                      {cardHeaderLinks}
                    </div>
                  ) : null}
                </CardHeader>
              ) : null}
              <CardBody>{children}</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
