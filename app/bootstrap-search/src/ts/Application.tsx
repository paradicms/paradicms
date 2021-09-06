import * as React from "react";
import {NavbarSearchForm} from "@paradicms/bootstrap";
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
        {({workQuery, setWorkQuery, setPage, ...workSearchProps}) => (
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
                      workQuery={workQuery}
                      worksPerPage={WORKS_PER_PAGE}
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
