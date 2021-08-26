import * as React from "react";
import {ObjectSearchPage} from "@paradicms/react-search";
import {NavbarSearchForm, ObjectSearchContainer} from "@paradicms/bootstrap";
import {
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
} from "reactstrap";
import {Helmet} from "react-helmet";
import {Configuration} from "@paradicms/models";
import {ObjectQueryService} from "@paradicms/services";

const OBJECTS_PER_PAGE = 10;

export const Application: React.FunctionComponent<{
  configuration: Configuration;
  objectQueryService: ObjectQueryService;
}> = ({configuration, objectQueryService}) => {
  const documentTitle = configuration.documentTitle ?? "Search";
  const navbarTitle = configuration.navbarTitle ?? documentTitle;

  return (
    <>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <ObjectSearchPage
        configuration={configuration.objectSearch}
        objectQueryService={objectQueryService}
        objectsPerPage={OBJECTS_PER_PAGE}
      >
        {({objectQuery, setObjectQuery, setPage, ...objectSearchProps}) => (
          <Container fluid>
            <Row>
              <Col>
                <Navbar>
                  <NavbarBrand className="mr-auto" tag="div">
                    {navbarTitle}
                  </NavbarBrand>
                  <Nav navbar>
                    <NavItem>
                      <NavbarSearchForm
                        onSearch={text => {
                          setObjectQuery({...objectQuery, text});
                          setPage(undefined);
                        }}
                      />
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <ObjectSearchContainer
                      {...objectSearchProps}
                      objectQuery={objectQuery}
                      objectsPerPage={OBJECTS_PER_PAGE}
                      renderObjectLink={(object, children) => (
                        <a href={object.page ?? object.uri}>{children}</a>
                      )}
                      setObjectQuery={setObjectQuery}
                      setPage={setPage}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </ObjectSearchPage>
    </>
  );
};
