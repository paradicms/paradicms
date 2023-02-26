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
import {
  defaultBootstrapStylesheetHref,
  NavbarSearchForm,
} from "@paradicms/react-dom-components";
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import {WorkSearchAppConfiguration} from "../lib/WorkSearchAppConfiguration";
import {getDefaultWorkQueryFilters} from "../lib/getDefaultWorkQueryFilters";

const SITE_TITLE_DEFAULT = "Work search";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  cardHeaderLinks?: React.ReactElement[];
  configuration: WorkSearchAppConfiguration;
  className?: string;
  onSearch?: (text: string) => void;
  title?: string;
}>> = ({
  cardHeaderLinks,
  children,
  title,
  configuration,
  onSearch: onSearchUserDefined,
}) => {
  const router = useRouter();

  // @ts-ignore
  let onSearch: ((text: string) => void) | undefined;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = (text: string) => {
      const href = Hrefs.home({
        filters: getDefaultWorkQueryFilters(configuration.workProperties),
        text,
      });
      // console.info("redirecting to search href", href);
      router.push(href);
      return null;
    };
  }

  const documentTitle: string[] = [];
  documentTitle.push(configuration.title ?? SITE_TITLE_DEFAULT);
  if (title) {
    documentTitle.push(title);
  }

  return (
    <>
      <Head>
        <title>{documentTitle.join(" - ")}</title>
        <link
          rel="stylesheet"
          href={configuration.stylesheet ?? defaultBootstrapStylesheetHref}
        />
      </Head>
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand className="me-auto" tag="div">
                <Link href={Hrefs.home()}>
                  {configuration.title ?? SITE_TITLE_DEFAULT}
                </Link>
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
              {title ? (
                <CardHeader className="text-center" tag="h3">
                  <div>{title}</div>
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
