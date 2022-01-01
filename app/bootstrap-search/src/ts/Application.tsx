import * as React from "react";
import {NavbarSearchForm, WorkSearchContainer} from "@paradicms/bootstrap";
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
import {AppConfiguration} from "@paradicms/configuration";
import {WorkQueryService} from "@paradicms/services";
import {usePageQueryParam, useWorkQueryParam} from "@paradicms/react-search";

export const Application: React.FunctionComponent<{
  configuration: AppConfiguration;
  workQueryService: WorkQueryService;
}> = ({configuration, workQueryService}) => {
  const documentTitle = configuration.documentTitle ?? "Search";
  const navbarTitle = configuration.navbarTitle ?? documentTitle;

  const {setWorkQuery, workQuery} = useWorkQueryParam(
    {
      filters: configuration.search?.filters ?? [],
    },
    "query"
  );

  const {page, setPage} = usePageQueryParam("page");

  return (
    <>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <Navbar>
              <NavbarBrand className="me-auto" tag="div">
                {navbarTitle}
              </NavbarBrand>
              <Nav navbar>
                <NavItem>
                  <NavbarSearchForm
                    onSearch={text => {
                      setWorkQuery({...workQuery, text});
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
                <WorkSearchContainer
                  page={page}
                  renderWorkLink={(work, children) => (
                    <a href={work.page ?? work.uri}>{children}</a>
                  )}
                  setPage={setPage}
                  setWorkQuery={setWorkQuery}
                  workQuery={workQuery}
                  workQueryService={workQueryService}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
