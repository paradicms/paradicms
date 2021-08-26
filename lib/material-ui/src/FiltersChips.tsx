import {Filter, JoinedFacet} from "@paradicms/models";
import * as React from "react";
import {makeStyles} from "@material-ui/core";
import {ValueFilterChips} from "./ValueFilterChips";
import {createFilterControl} from "@paradicms/react-search";

const useStyles = makeStyles(theme => ({
  chip: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export const FiltersChips: React.FunctionComponent<{
  facets: readonly JoinedFacet[];
  filters: readonly Filter[];
  onChange: (filters: readonly Filter[]) => void;
}> = ({facets, filters, onChange}) => {
  const classes = useStyles();

  return (
    <>
      {filters.map((filter, filterI) => {
        const onChangeFilter = (newFilter: Filter) => {
          const filtersCopy = filters.concat();
          filtersCopy[filterI] = newFilter;
          onChange(filtersCopy);
        };

        return createFilterControl({
          facets,
          factory: {
            createCollectionValueFilterControl(facet, filter) {
              throw new EvalError("not implemented");
            },
            createInstitutionValueFilterControl(facet, filter) {
              throw new EvalError("not implemented");
            },
            createStringPropertyValueFilterControl(facet, filter) {
              return (
                <ValueFilterChips
                  className={classes.chip}
                  facet={facet}
                  filter={filter}
                  onChange={onChangeFilter}
                />
              );
            },
          },
          filter,
        });
      })}
    </>
  );
};
