import {Hrefs} from "~/Hrefs";
import * as React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

export const Footer: React.FunctionComponent = () => (
  <footer>
    <Container fluid>
      <Row>&nbsp;</Row>
      <Row>
        <Col className="text-center" md="12">
          <Link to={Hrefs.privacy}>Privacy</Link>&nbsp;|&nbsp;
        </Col>
      </Row>
    </Container>
  </footer>
);
