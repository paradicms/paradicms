import {
  ObjectFacets,
  ObjectFilters,
  ObjectFiltersState,
  PropertyDefinition,
} from "@paradicms/models";
import * as React from "react";
import {Chip, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  chip: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export const ObjectFiltersChips: React.FunctionComponent<{
  facets: ObjectFacets;
  filters: ObjectFilters;
  onChange: (filters: ObjectFilters) => void;
  propertyDefinitionsByUri: {[index: string]: PropertyDefinition};
}> = ({facets, filters, onChange, propertyDefinitionsByUri}) => {
  const classes = useStyles();

  const filtersState = new ObjectFiltersState({facets, filters});

  const filterChips: React.ReactNodeArray = [];
  filtersState.excludedProperties.forEach(
    (excludedProperty, excludedPropertyI) => {
      filterChips.push(
        <Chip
          className={classes.chip}
          color="secondary"
          key={"excluded-property-" + excludedPropertyI}
          label={
            <span>
              Exclude&nbsp;
              {propertyDefinitionsByUri[excludedProperty.uri].label}:{" "}
              {excludedProperty.value}
            </span>
          }
          onDelete={() => {
            filtersState.includeProperty(excludedProperty);
            onChange(filtersState.snapshot);
          }}
        />
      );
    }
  );
  filtersState.includedProperties.forEach(
    (includedProperty, includedPropertyI) => {
      filterChips.push(
        <Chip
          className={classes.chip}
          color="primary"
          key={"included-property-" + includedProperty}
          label={
            <span>
              Include&nbsp;
              {propertyDefinitionsByUri[includedProperty.uri].label}:{" "}
              {includedProperty.value}
            </span>
          }
          onDelete={() => {
            filtersState.excludeProperty(includedProperty);
            onChange(filtersState.snapshot);
          }}
        />
      );
    }
  );

  return <>{filterChips}</>;
};
