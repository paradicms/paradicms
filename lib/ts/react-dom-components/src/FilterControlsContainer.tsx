import * as React from "react";
import {Col, Container, Row} from "reactstrap";

export const FilterControlsContainer: React.FunctionComponent<{
  filterControls: readonly React.ReactElement[];
}> = ({filterControls}) => (
  <Container className="mx-0 px-0" fluid>
    {filterControls.map((filterControl, filterControlI) => (
      <Row
        className={
          filterControlI + 1 < filterControls.length ? "mb-4" : undefined
        }
        key={filterControlI}
      >
        <Col className="px-0" xs={12}>
          {filterControl}
        </Col>
      </Row>
    ))}
  </Container>
);
