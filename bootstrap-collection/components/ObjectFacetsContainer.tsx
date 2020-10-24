import * as React from "react";
import {ObjectFacets, ObjectFilters} from "@paradicms/models";
import {Col, Container, Row} from "reactstrap";
import {Accordion} from "components/Accordion";

export const ObjectFacetsContainer: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
}> = ({facets, filters, onChange}) => {
  // const filtersState = new ObjectFiltersState(filters);

  return (
    <Container fluid>
      {(facets.properties ?? []).map(propertyFacet => (
        <Row
          className="facet"
          data-cy={propertyFacet.definition.uri + "-facet"}
          item
          key={propertyFacet.definition.uri}
        >
          <Col xs={12}>
            <Accordion title={propertyFacet.definition.label}>
              {/*<StringFacetForm*/}
              {/*  valueUniverse={propertyFacet.values}*/}
              {/*  currentState={filtersState.getPropertyFilter(*/}
              {/*    propertyFacet.definition.uri*/}
              {/*  )}*/}
              {/*  onChange={newState => {*/}
              {/*    if (newState) {*/}
              {/*      filtersState.setPropertyFilter({*/}
              {/*        propertyDefinitionUri: propertyFacet.definition.uri,*/}
              {/*        ...newState,*/}
              {/*      });*/}
              {/*    } else {*/}
              {/*      filtersState.removePropertyFilter(*/}
              {/*        propertyFacet.definition.uri*/}
              {/*      );*/}
              {/*    }*/}
              {/*    onChange(filtersState.snapshot);*/}
              {/*  }}*/}
              {/*/>*/}
            </Accordion>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
