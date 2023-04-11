import * as React from "react";
import {Filter} from "@paradicms/services";
import {Col, Container, Row} from "reactstrap";

export const FilterControlsContainer: React.FunctionComponent<{
  filterControls: readonly {
    control: React.ReactElement;
    filter: Filter;
  }[];
}> = ({filterControls}) => (
  <Container className="mx-0 px-0" fluid>
    {filterControls.map(({control: filterControl, filter}, filterControlI) => (
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