import * as React from "react";
import Helmet from "react-helmet";
import {Hrefs} from "lib/Hrefs";
import {Collection} from "@paradicms/models";
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
import {NavbarSearchForm} from "components/NavbarSearchForm";
import {useRouter} from "next/router";

export const Layout: React.FunctionComponent<React.PropsWithChildren<{
  collection: Collection;
  cardTitle?: React.ReactNode;
  className?: string;
  documentTitle?: string;
  onSearch?: (text: string) => void;
}>> = ({
  collection,
  cardTitle,
  children,
  documentTitle,
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
        text: text,
      }).toString();
      console.info("redirecting to search href", href);
      router.push(href);
      return null;
    };
  }

  return (
    <>
      <Helmet
        title={collection.title + (documentTitle ? " - " + documentTitle : "")}
      />
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand href="/" className="mr-auto">
                {collection.title}
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
