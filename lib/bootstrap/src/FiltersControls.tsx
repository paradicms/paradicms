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
import {Filter, JoinedFacet} from "@paradicms/models";
import {createFilterControl} from "./createFilterControl";

export const FiltersControls: React.FunctionComponent<{
  facets: readonly JoinedFacet[];
  filters: readonly Filter[];
  onChange: (filters: readonly Filter[]) => void;
}> = ({facets, filters, onChange}) => {
  const [openFilterIndex, setOpenFilterIndex] = useState<number>(-1);

  return (
    <Container fluid>
      {filters.map((filter, filterI) => {
        const onChangeFilter = (newFilter: Filter) => {
          const filtersCopy = filters.concat();
          filtersCopy[filterI] = newFilter;
          onChange(filtersCopy);
        };

        const filterControl = createFilterControl({
          facets,
          filter,
          onChangeFilter,
        });
        if (!filterControl) {
          return;
        }

        return (
          <Row
            className="facet"
            // data-cy={propertyFacet.definition.uri + "-facet"}
            key={filterI.toFixed()}
          >
            <Col xs={12}>
              <Card>
                <CardHeader
                  onClick={() =>
                    setOpenFilterIndex(
                      openFilterIndex === filterI ? -1 : filterI
                    )
                  }
                >
                  {filter.label}
                </CardHeader>
                <Collapse isOpen={openFilterIndex === filterI}>
                  <CardBody className="p-0">{filterControl}</CardBody>
                </Collapse>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
