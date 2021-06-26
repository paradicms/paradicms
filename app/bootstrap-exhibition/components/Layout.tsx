import * as React from "react";
import Helmet from "react-helmet";
import {Hrefs} from "lib/Hrefs";
import {Breadcrumb, BreadcrumbItem, Col, Container, Navbar, NavbarBrand, Row} from "reactstrap";
import Link from "next/link";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: {readonly title: string;};
  object?: {readonly title: string; readonly uri: string;};
}>> = ({
         collection,
         children,
         object,
       }) => {
  return (
    <>
      <Helmet
        title={collection.title + (object ? " - " + object.title : "")}
      />
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Navbar className="p-0">
              <NavbarBrand className="mr-auto p-0">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link href={Hrefs.home}>{collection.title}</Link>
                  </BreadcrumbItem>
                  {object ?
                    <BreadcrumbItem>
                      <Link href={Hrefs.object(object.uri)}>{object.title}</Link>
                    </BreadcrumbItem>
                    : null}
                </Breadcrumb>
              </NavbarBrand>
            </Navbar>
          </Col>
        </Row>
        <Row className="m-4">
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};
