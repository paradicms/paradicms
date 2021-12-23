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
import {Configuration} from "@paradicms/models";
import {WorkQueryService} from "@paradicms/services";
import {WorkSearchPage} from "@paradicms/react-search";

const WORKS_PER_PAGE = 10;

export const Application: React.FunctionComponent<{
  configuration: Configuration;
  workQueryService: WorkQueryService;
}> = ({configuration, workQueryService}) => {
  const documentTitle = configuration.documentTitle ?? "Search";
  const navbarTitle = configuration.navbarTitle ?? documentTitle;

  return (
    <>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <WorkSearchPage
        configuration={configuration.workSearch}
        workQueryService={workQueryService}
        worksPerPage={WORKS_PER_PAGE}
      >
        {({
          page,
          pageMax,
          workQuery,
          setWorkQuery,
          setPage,
          ...workSearchProps
        }) => (
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
        )}
      </WorkSearchPage>
    </>
  );
};
