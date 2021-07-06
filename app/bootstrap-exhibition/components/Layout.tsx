import * as React from "react";
import {Hrefs} from "lib/Hrefs";
import {Breadcrumb, BreadcrumbItem, Col, Container, Navbar, Row} from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import {GuiMetadata} from "@paradicms/models";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: {readonly title: string;};
  guiMetadata: GuiMetadata | null;
  object?: {readonly title: string; readonly uri: string;};
}>> = ({
         collection,
         children,
         guiMetadata,
         object,
       }) => (
  <>
    <Head>
      <title>{collection.title + (object ? " - " + object.title : "")}</title>
      <link rel="stylesheet" href={guiMetadata?.bootstrapStylesheetHref ?? STYLESHEET_HREF_DEFAULT} />
    </Head>
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Navbar className="p-0">
            <div className="navbar-brand mr-auto p-0">
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
            </div>
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
