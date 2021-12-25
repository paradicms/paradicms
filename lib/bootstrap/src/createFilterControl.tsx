import * as React from "react";
import {createFilterControl as createFilterControlDelegate} from "@paradicms/react-search";
import {ValueFilterControl} from "./ValueFilterControl";
import {Facet} from "@paradicms/facets";
import {Filter} from "@paradicms/filters";

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
