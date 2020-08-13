import * as React from "react";
import {Grid} from "@material-ui/core";
import {ObjectFilters} from "~/models/ObjectFilters";
import {FacetExpansionPanel} from "~/components/object/FacetExpansionPanel";
import {ObjectFacets} from "~/models/ObjectFacets";
import {StringFilter} from "~/models/StringFilter";
import _ from "lodash";
import {PropertyFilter} from "~/models/PropertyFilter";
import {PropertyKey} from "~/models/PropertyKey";
import {StringFacetForm} from "~/components/object/StringFacetForm";

export const ObjectFacetsGrid: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
}> = ({facets, filters, onChange}) => {
  const onChangePropertyFilter = (
    key: PropertyKey,
    newState?: StringFilter
  ) => {
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
