import * as React from "react";
import {useContext} from "react";
import {ObjectQueryServiceContext} from "~/contexts/ObjectQueryServiceContext";
import {ObjectSearchPage} from "@paradicms/react-services";
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
import {ConfigurationContext} from "~/contexts/ConfigurationContext";
import {Helmet} from "react-helmet";

const OBJECTS_PER_PAGE = 10;

export const Application: React.FunctionComponent = () => {
  const configuration = useContext(ConfigurationContext);
  const objectQueryService = useContext(ObjectQueryServiceContext);

  const documentTitle = configuration.documentTitle ?? "Search";
  const navbarTitle = configuration.navbarTitle ?? documentTitle;

  return (
    <>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <ObjectSearchPage
        objectQueryService={objectQueryService}
        objectsPerPage={OBJECTS_PER_PAGE}
      >
        {({objectQuery, setObjectQuery, ...objectSearchProps}) => (
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
                        onSearch={text =>
                          setObjectQuery({...objectQuery, text})
                        }
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
