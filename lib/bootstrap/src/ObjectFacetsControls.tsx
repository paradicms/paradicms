import * as React from "react";
import {ObjectFacets, ObjectFilters, ObjectFiltersState} from "@paradicms/models";
import {Col, Container, Row} from "reactstrap";
import {Accordion} from "./Accordion";
import {ValueFacetControls} from "./ValueFacetControls";

export const ObjectFacetsControls: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
}> = ({facets, filters, onChange}) => {
  const filtersState = new ObjectFiltersState({facets, filters});

  return (
    <Container fluid>
      {(facets.properties ?? [])
        .concat()
        .sort((left, right) =>
          left.definition.label.localeCompare(right.definition.label)
        )
        .map(propertyFacet => (
          <Row
            className="facet"
            data-cy={propertyFacet.definition.uri + "-facet"}
            key={propertyFacet.definition.uri}
          >
            <Col xs={12}>
              <Accordion title={propertyFacet.definition.label}>
                <ValueFacetControls
                  currentState={filtersState.propertyFilter(
                    propertyFacet.definition.uri,
                  )}
                  onChange={newState => {
                    if (newState) {
                      filtersState.setPropertyFilter({
                        propertyDefinitionUri: propertyFacet.definition.uri,
                        ...newState,
                      });
                    } else {
                      filtersState.removePropertyFilter(
                        propertyFacet.definition.uri
                      );
                    }
                    onChange(filtersState.snapshot);
                  }}
                  valueUniverse={propertyFacet.values}
                />
              </Accordion>
            </Col>
          </Row>
        ))}
    </Container>
  );
};
