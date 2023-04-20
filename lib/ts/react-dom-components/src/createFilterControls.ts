import * as React from "react";
import {FacetUnion, FilterUnion} from "@paradicms/services";
import {createFilterControl} from "./createFilterControl";

export const createFilterControls = (kwds: {
  facets: readonly FacetUnion[];
  filters: readonly FilterUnion[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChangeFilters: (filters: readonly FilterUnion[]) => void;
}): readonly {control: React.ReactElement; filter: FilterUnion}[] => {
  const {facets, filters, getAbsoluteImageSrc, onChangeFilters} = kwds;

  const filterControls: {
    control: React.ReactElement;
    filter: FilterUnion;
  }[] = [];

  filters.forEach((filter, filterI) => {
    const onChangeFilter = (newFilter: FilterUnion) => {
      const filtersCopy = kwds.filters.concat();
      filtersCopy[filterI] = newFilter;
      onChangeFilters(filtersCopy);
    };

    const control = createFilterControl({
      facets,
      filter,
      getAbsoluteImageSrc,
      onChangeFilter,
    });

    if (control) {
      filterControls.push({control, filter});
    }
  });

  return filterControls;
};
