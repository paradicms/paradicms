import * as React from "react";
import {Hrefs} from "lib/Hrefs";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
} from "reactstrap";
import {NavbarSearchForm, STYLESHEET_HREF_DEFAULT} from "@paradicms/bootstrap";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import {Configuration} from "@paradicms/models";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: {readonly title: string; readonly uri: string};
  configuration: Configuration;
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({
  collection,
  cardTitle,
  children,
  documentTitle,
  configuration,
  onSearch: onSearchUserDefined,
}) => {
  const router = useRouter();

  // @ts-ignore
  let onSearch: (text: string) => void;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = (text: string) => {
      const href = Hrefs.collection({
        filters: configuration.workSearch.filters,
        text: text,
      }).toString();
      console.info("redirecting to search href", href);
      router.push(href);
      return null;
    };
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
            configuration.bootstrapStylesheetHref ?? STYLESHEET_HREF_DEFAULT
          }
        />
      </Head>
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand className="mr-auto" tag="div">
                <Link href={Hrefs.home}>{collection.title}</Link>
              </NavbarBrand>
              <Nav navbar>
                <NavItem>
                  <NavbarSearchForm onSearch={onSearch} />
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              {cardTitle || documentTitle ? (
                <CardHeader tag="h3">
                  <CardTitle>{cardTitle ?? documentTitle}</CardTitle>
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
