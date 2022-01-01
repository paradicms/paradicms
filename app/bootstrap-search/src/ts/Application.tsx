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
import {useWorkSearchQueryParams} from "@paradicms/react-search";

export const Application: React.FunctionComponent<{
  configuration: AppConfiguration;
  workQueryService: WorkQueryService;
}> = ({configuration, workQueryService}) => {
  const documentTitle = configuration.documentTitle ?? "Search";
  const navbarTitle = configuration.navbarTitle ?? documentTitle;

  const {onSearch, ...workSearchQueryParams} = useWorkSearchQueryParams(
    configuration
  );

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
                  <NavbarSearchForm onSearch={onSearch} />
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
                  renderWorkLink={(work, children) => (
                    <a href={work.page ?? work.uri}>{children}</a>
                  )}
                  workQueryService={workQueryService}
                  {...workSearchQueryParams}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
