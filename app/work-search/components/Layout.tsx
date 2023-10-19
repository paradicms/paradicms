import {JsonAppConfiguration, Property} from "@paradicms/models";
import {
  NavbarSearchForm,
  defaultBootstrapStylesheetHref,
} from "@paradicms/react-dom-components";
import {Hrefs} from "lib/Hrefs";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import * as React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import {getDefaultWorksQueryFilters} from "../lib/getDefaultWorksQueryFilters";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  cardHeaderLinks?: React.ReactElement[];
  collectionLabel?: string;
  className?: string;
  configuration: JsonAppConfiguration | null;
  onSearch?: (text: string) => void;
  properties: readonly Pick<
    Property,
    "filterable" | "iri" | "label" | "searchable"
  >[];
  title?: string;
}>> = ({
  cardHeaderLinks,
  children,
  collectionLabel,
  configuration,
  title,
  onSearch: onSearchUserDefined,
  properties,
}) => {
  const router = useRouter();

  // @ts-ignore
  let onSearch: ((text: string) => void) | undefined;
  if (onSearchUserDefined) {
    onSearch = onSearchUserDefined;
  } else {
    onSearch = (text: string) => {
      const href = Hrefs.home({
        filters: getDefaultWorksQueryFilters(properties),
        text,
      });
      // console.info("redirecting to search href", href);
      router.push(href);
      return null;
    };
  }

  let siteTitle: string | undefined;
  if (configuration?.title) {
    siteTitle = configuration.title;
  } else if (collectionLabel) {
    siteTitle = collectionLabel;
  }

  const documentTitle: string[] = [];
  if (siteTitle) {
    documentTitle.push(siteTitle);
  }
  if (title) {
    documentTitle.push(title);
  }

  return (
    <>
      <Head>
        <title>{documentTitle.join(" - ")}</title>
        <link
          rel="stylesheet"
          href={configuration?.stylesheet ?? defaultBootstrapStylesheetHref}
        />
      </Head>
      <Container className="px-0" fluid>
        <Row>
          <Col className="pe-0">
            <Navbar>
              <NavbarBrand className="me-auto" tag="div">
                {siteTitle ? (
                  <Link href={Hrefs.home()}>{siteTitle}</Link>
                ) : null}
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
          <Col className="px-0">
            <Card className="border-0">
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
