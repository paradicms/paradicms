import * as React from "react";
import {Facet} from "@paradicms/facets";
import {Filter} from "@paradicms/filters";
import {CreateFilterControlFactory} from "./CreateFilterControlFactory";
import {createFilterControl} from "./createFilterControl";

export const createFilterControls = (kwds: {
  facets: readonly Facet[];
  factory: CreateFilterControlFactory;
  filters: readonly Filter[];
  onChangeFilters: (filters: readonly Filter[]) => void;
}): readonly {control: React.ReactElement; filter: Filter}[] => {
  const {facets, factory, filters, onChangeFilters} = kwds;

  const filterControls: {
    control: React.ReactElement;
    filter: Filter;
  }[] = [];

  filters.forEach((filter, filterI) => {
    const onChangeFilter = (newFilter: Filter) => {
      const filtersCopy = kwds.filters.concat();
      filtersCopy[filterI] = newFilter;
      onChangeFilters(filtersCopy);
    };

    const control = createFilterControl({
      facets,
      factory,
      filter,
      onChangeFilter,
    });

    if (control) {
      filterControls.push({control, filter});
    }
  });

  return filterControls;
};
