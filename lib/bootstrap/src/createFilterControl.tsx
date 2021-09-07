import {Facet, Filter} from "@paradicms/models";
import * as React from "react";
import {createFilterControl as createFilterControlDelegate} from "@paradicms/react-search";
import {ValueFilterControl} from "./ValueFilterControl";

export const createFilterControl: (kwds: {
  facets: readonly Facet[];
  filter: Filter;
  onChangeFilter: (newFilter: Filter) => void;
}) => React.ReactNode = ({facets, filter, onChangeFilter}) => {
  return createFilterControlDelegate({
    facets,
    filter,
    factory: {
      createCollectionValueFilterControl: (facet, filter) => (
        <ValueFilterControl
          facet={facet}
          filter={filter}
          onChange={onChangeFilter}
        />
      ),

      createInstitutionValueFilterControl: (facet, filter) => (
        <ValueFilterControl
          facet={facet}
          filter={filter}
          onChange={onChangeFilter}
        />
      ),

      createStringPropertyValueFilterControl: (facet, filter) => (
        <ValueFilterControl
          facet={facet}
          filter={filter}
          onChange={onChangeFilter}
        />
      ),
    },
  });
};
