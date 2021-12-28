import * as React from "react";
import {
  NavbarSearchForm,
  thumbnailTargetDimensions,
  WorkSearchContainer,
} from "@paradicms/bootstrap";
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

  const {
    setPage,
    setWorkQuery,
    workQuery,
    workQueryResults,
    ...workSearchProps
  } = useWorkQuery({
    defaultWorkQuery: {
      filters: configuration.search?.filters ?? [],
      valueFacetValueThumbnailSelector: {
        targetDimensions: thumbnailTargetDimensions,
      },
    },
    workQueryService,
    worksPerPage: WORKS_PER_PAGE,
  });

  if (!workQueryResults) {
    return null;
  }

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
                  renderWorkLink={(work, children) => (
                    <a href={work.page ?? work.uri}>{children}</a>
                  )}
                  setPage={setPage}
                  setWorkQuery={setWorkQuery}
                  workQuery={workQuery}
                  workQueryResults={workQueryResults}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
