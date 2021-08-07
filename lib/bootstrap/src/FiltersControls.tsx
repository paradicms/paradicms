import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {Facet, Filter} from "@paradicms/models";
import {createFilterControl} from "./createFilterControl";

export const FiltersControls: React.FunctionComponent<{
  facets: readonly Facet[];
  filters: readonly Filter[];
  onChange: (filters: readonly Filter[]) => void;
}> = ({facets, filters, onChange}) => {
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
            <Col xs={12}>{filterControl}</Col>
          </Row>
        );
      })}
    </Container>
  );
};
