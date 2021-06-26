import * as React from "react";
import Helmet from "react-helmet";
import {Hrefs} from "lib/Hrefs";
import {Card, CardBody, CardHeader, CardTitle, Col, Container, Navbar, NavbarBrand, Row} from "reactstrap";
import Link from "next/link";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: {readonly title: string;};
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
}>> = ({
         collection,
         cardTitle,
         children,
         documentTitle,
       }) => {
  return (
    <>
      <Helmet
        title={collection.title + (documentTitle ? " - " + documentTitle : "")}
      />
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand className="mr-auto">
                <Link href={Hrefs.home}>{collection.title}</Link>
              </NavbarBrand>
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
