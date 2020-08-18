import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@material-ui/core";
import {ObjectFilters} from "@paradicms/models";
import {ObjectFacets} from "@paradicms/models";
import {StringFilter} from "@paradicms/models";
import {PropertyFilter} from "@paradicms/models";
import {StringFacetForm} from "~/components/StringFacetForm";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FacetExpansionPanel: React.FunctionComponent<React.PropsWithChildren<{
  id: string;
  title: string;
}>> = ({children, id, title}) => {
  return (
    <Grid item className="facet" data-cy={id + "-facet"}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export const ObjectFacetsGrid: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
}> = ({facets, filters, onChange}) => {
  const onChangePropertyFilter = (key: string, newState?: StringFilter) => {
    const {properties: oldProperties, ...oldFiltersWithoutProperties} = filters;

    let newPropertyFilters: PropertyFilter[];
    if (!oldProperties) {
      newPropertyFilters = [];
    } else {
      // Remove the key's filter and then add it back
      newPropertyFilters = oldProperties.filter(
        propertyFilter => propertyFilter.key !== key
      );
    }
    if (newState) {
      newPropertyFilters.push({key, ...newState});
    }

    let newFilters: ObjectFilters;
    if (newPropertyFilters.length === 0) {
      newFilters = oldFiltersWithoutProperties;
    } else {
      newFilters = {
        ...oldFiltersWithoutProperties,
        properties: newPropertyFilters,
      };
    }

    onChange(newFilters);
  };

  return (
    <Grid container direction="column" spacing={4}>
      {(facets.properties ?? []).map(propertyFacet => (
        <Grid item key={propertyFacet.definition.key}>
          <FacetExpansionPanel
            id={propertyFacet.definition.key}
            title={propertyFacet.definition.labelSingular}
          >
            <StringFacetForm
              valueUniverse={propertyFacet.values}
              currentState={filters.properties?.find(
                propertyFilter =>
                  propertyFilter.key === propertyFacet.definition.key
              )}
              onChange={newState =>
                onChangePropertyFilter(propertyFacet.definition.key, newState)
              }
            />
          </FacetExpansionPanel>
        </Grid>
      ))}
    </Grid>
  );
};
