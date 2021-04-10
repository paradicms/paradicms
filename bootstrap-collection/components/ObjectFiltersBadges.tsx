import {
  Models,
  ObjectFacets,
  ObjectFilters,
  ObjectFiltersState,
  PropertyDefinition,
} from "@paradicms/models";
import * as React from "react";
import {Badge} from "reactstrap";

export const ObjectFiltersBadges: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({facets, filters, propertyDefinitions}) => {
  const filtersState = new ObjectFiltersState({facets, filters});

  const propertyDefinitionsByUri = Models.indexByUri(propertyDefinitions);

  const filterBadges: React.ReactNodeArray = [];
  filtersState.excludedProperties.forEach(
    (excludedProperty, excludedPropertyI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={"excluded-property-" + excludedPropertyI}
        >
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {propertyDefinitionsByUri[excludedProperty.uri].label}:{" "}
            {excludedProperty.value}
          </Badge>
        </h5>
      );
    }
  );
  filtersState.includedProperties.forEach(
    (includedProperty, includedPropertyI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={"included-property-" + includedPropertyI}
        >
          <Badge className="p-2" color="warning" pill>
            Include&nbsp;
            {propertyDefinitionsByUri[includedProperty.uri].label}:{" "}
            {includedProperty.value}
          </Badge>
        </h5>
      );
    }
  );

  return <>{filterBadges}</>;
};
