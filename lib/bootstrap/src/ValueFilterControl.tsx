import * as React from "react";
import {JoinedValueFacet, PrimitiveType, ValueFilter} from "@paradicms/models";
import {ValueFilterTable} from "@paradicms/react-search";
import {Button, Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages} from "@fortawesome/free-solid-svg-icons";

interface ValueFilterControlProps<T extends PrimitiveType> {
  facet: JoinedValueFacet<T>;
  filter: ValueFilter<T>;
  onChange: (newFilter: ValueFilter<T>) => void;
}

export const ValueFilterControl = <T extends PrimitiveType>(
  props: ValueFilterControlProps<T>
) => {
  const {facet, filter, onChange} = props;

  const valueFilterTable = (
    <ValueFilterTable facet={facet} filter={filter} onChange={onChange} />
  );

  if (!facet.joinedValues.some(value => !!value.thumbnail)) {
    return valueFilterTable;
  }

  return (
    <Container fluid>
      <Row className="mt-2">
        <Col className="d-flex justify-content-end" xs={12}>
          <Button color="primary" onClick={() => {}} title="gallery view">
            <FontAwesomeIcon icon={faImages} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="px-0" xs={12}>
          {valueFilterTable}
        </Col>
      </Row>
    </Container>
  );
};
