import {
  Facet,
  Filter,
  PropertyDefinition,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";
import * as React from "react";
import {makeStyles} from "@material-ui/core";
import {ValueFilterChips} from "ValueFilterChips";

const useStyles = makeStyles(theme => ({
  chip: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export const FiltersChips: React.FunctionComponent<{
  facets: readonly Facet[];
  filters: readonly Filter[];
  onChange: (filters: readonly Filter[]) => void;
  propertyDefinitionsByUri: {[index: string]: PropertyDefinition};
}> = ({facets, filters, onChange, propertyDefinitionsByUri}) => {
  const classes = useStyles();

  return <>{filters.map((filter, filterI) => {
    const onChangeFilter = (newFilter: Filter | null) => {
      const filtersCopy = filters.concat();
      if (newFilter) {
        filtersCopy[filterI] = newFilter;
      } else {
        filtersCopy.splice(filterI, 1);
      }
      onChange(filtersCopy);
    };

    switch (filter.type) {
      case "StringPropertyValue": {
        const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
        const facet: StringPropertyValueFacet | undefined = facets.find(facet => facet.type === "StringPropertyValue" && (facet as StringPropertyValueFacet).propertyUri === concreteFilter.propertyUri) as StringPropertyValueFacet | undefined;
        if (!facet) {
          return;
        }
        return <ValueFilterChips className={classes.chip} facet={facet} filter={concreteFilter}
                                 labelPrefix={propertyDefinitionsByUri[concreteFilter.propertyUri]!.label}
                                 onChange={onChangeFilter} />;
      }
    }
  })}
  </>;
};
