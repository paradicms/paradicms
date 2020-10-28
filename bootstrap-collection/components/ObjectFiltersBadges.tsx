import {
  ObjectFilters,
  ObjectFiltersState,
  PropertyDefinition,
} from "@paradicms/models";
import * as React from "react";
import {Badge} from "reactstrap";

export const ObjectFiltersBadges: React.FunctionComponent<{
  objectFilters: ObjectFilters;
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({objectFilters, propertyDefinitions}) => {
  const filtersState = new ObjectFiltersState(objectFilters);

  const propertyDefinitionsByUri = propertyDefinitions.reduce(
    (propertyDefinitionsByUri, propertyDefinition) => {
      propertyDefinitionsByUri[propertyDefinition.uri] = propertyDefinition;
      return propertyDefinitionsByUri;
    },
    {} as {[index: string]: PropertyDefinition}
  );

  const filterBadges: React.ReactNodeArray = [];
  filtersState
    .getExcludedProperties()
    .forEach((excludedProperty, excludedPropertyI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={"excluded-property-" + excludedPropertyI}
        >
          <Badge className="p-2" color="warning" pill>
            Exclude&nbsp;
            {
              propertyDefinitionsByUri[excludedProperty.propertyDefinitionUri]
                .label
            }
            : {excludedProperty.value}
          </Badge>
        </h5>
      );
    });
  filtersState
    .getIncludedProperties()
    .forEach((includedProperty, includedPropertyI) => {
      filterBadges.push(
        <h5
          className="d-inline-block ml-2"
          key={"included-property-" + includedPropertyI}
        >
          <Badge className="p-2" color="warning" pill>
            Include&nbsp;
            {
              propertyDefinitionsByUri[includedProperty.propertyDefinitionUri]
                .label
            }
            : {includedProperty.value}
          </Badge>
        </h5>
      );
    });

  return <>{filterBadges}</>;
};
