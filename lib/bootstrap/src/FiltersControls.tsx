import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {Accordion} from "./Accordion";
import {ValueFilterControls} from "./ValueFilterControls";
import {Facet, Filter, StringPropertyValueFacet, StringPropertyValueFilter} from "@paradicms/models";

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

        switch (filter.type) {
          case "StringPropertyValue": {
            const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
            const facet: StringPropertyValueFacet | undefined = facets.find(facet => facet.type === "StringPropertyValue" && (facet as StringPropertyValueFacet).propertyUri === concreteFilter.propertyUri) as StringPropertyValueFacet | undefined;
            if (!facet) {
              return;
            }
            return (
              <Row
                className="facet"
                // data-cy={propertyFacet.definition.uri + "-facet"}
                key={filterI.toFixed()}
              >
                <Col xs={12}>
                  <Accordion title={filter.label}>
                    <ValueFilterControls
                      facet={facet}
                      filter={concreteFilter}
                      onChange={onChangeFilter}
                    />
                  </Accordion>
                </Col>
              </Row>
            );
          }
        }
      })}
    </Container>
  );
};
