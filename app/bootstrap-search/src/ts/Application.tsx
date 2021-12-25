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
import {useWorkQuery} from "@paradicms/react-search";

const WORKS_PER_PAGE = 10;

export const Application: React.FunctionComponent<{
  configuration: AppConfiguration;
  workQueryService: WorkQueryService;
}> = ({configuration, workQueryService}) => {
  const documentTitle = configuration.documentTitle ?? "Search";
  const navbarTitle = configuration.navbarTitle ?? documentTitle;

  const useWorkQueryOut = useWorkQuery({
    configuration: configuration.workSearch,
    workQueryService,
    worksPerPage: WORKS_PER_PAGE,
  });
  if (!useWorkQueryOut) {
    return null;
  }
  const {
    page,
    pageMax,
    setPage,
    setWorkQuery,
    workQuery,
    ...workSearchProps
  } = useWorkQueryOut;

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
                  {...workSearchProps}
                  page={page}
                  pageMax={pageMax}
                  workQuery={workQuery}
                  renderWorkLink={(work, children) => (
                    <a href={work.page ?? work.uri}>{children}</a>
                  )}
                  setWorkQuery={setWorkQuery}
                  setPage={setPage}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
