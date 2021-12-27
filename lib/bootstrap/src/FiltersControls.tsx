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
import {createFilterControl} from "./createFilterControl";
import {Facet} from "@paradicms/facets";
import {Filter} from "@paradicms/filters";

export const FiltersControls: React.FunctionComponent<{
  facets: readonly Facet[];
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
          return null;
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
