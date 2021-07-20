import * as React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import {ObjectFacets, ObjectFilters, ObjectFiltersState} from "@paradicms/models";
import {ValueFacetControls} from "ValueFacetControls";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const ObjectFacetsControls: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
}> = ({facets, filters, onChange}) => {
  const filtersState = new ObjectFiltersState({facets, filters});

  return (
    <Grid container direction="column" spacing={2}>
      {(facets.properties ?? [])
        .concat()
        .sort((left, right) =>
          left.definition.label.localeCompare(right.definition.label)
        )
        .map(propertyFacet => (
          <Grid
            className="facet"
            data-cy={propertyFacet.definition.uri + "-facet"}
            item
            key={propertyFacet.definition.uri}
          >
            <Accordion TransitionProps={{unmountOnExit: true}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {propertyFacet.definition.label}
              </AccordionSummary>
              <AccordionDetails>
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
                  title={propertyFacet.definition.label}
                  valueUniverse={propertyFacet.values}
                />
              </AccordionDetails>
            </Accordion>{" "}
          </Grid>
        ))}
    </Grid>
  );
};
