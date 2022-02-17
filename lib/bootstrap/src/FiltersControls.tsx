import * as React from "react";
import {useState} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Row,
} from "reactstrap";
import {Filter} from "@paradicms/filters";

export const FiltersControls: React.FunctionComponent<{
  filtersControls: readonly {
    control: React.ReactElement;
    filter: Filter;
  }[];
}> = ({filtersControls}) => {
  const [openFilterIndex, setOpenFilterIndex] = useState<number>(-1);

  return (
    <Container fluid>
      {filtersControls.map(({control, filter}, filterI) => (
        <Row
          className="facet"
          // data-cy={propertyFacet.definition.uri + "-facet"}
          key={filterI.toFixed()}
        >
          <Col xs={12}>
            <Card>
              <CardHeader
                onClick={() =>
                  setOpenFilterIndex(openFilterIndex === filterI ? -1 : filterI)
                }
                style={{cursor: "pointer"}}
              >
                {filter.label}
              </CardHeader>
              <Collapse isOpen={openFilterIndex === filterI}>
                <CardBody className="p-0">{control}</CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
