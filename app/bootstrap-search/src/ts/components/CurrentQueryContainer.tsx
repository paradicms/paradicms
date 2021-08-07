import * as React from "react";
import {CurrentQueryStore} from "~/stores/CurrentQueryStore";
import {Col, Container, Row} from "reactstrap";
import {createFilterComponent} from "~/components/createFilterComponent";
import {Filter} from "@paradicms/models";

export const CurrentQueryContainer: React.FunctionComponent = () => {
  // @ts-ignore
  const currentQuery: Query = CurrentQueryStore.useState(
    (state) => state.currentQuery
  );

  return (
    <Container className="mb-2" fluid>
      {currentQuery.filters.map((filter: Filter) => (
        <Row className="mt-2" key={filter.id}>
          <Col className="px-0" xs={12}>
            {createFilterComponent(filter)}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
