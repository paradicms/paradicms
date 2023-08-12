import * as React from "react";
import {WorksFacet, WorksFilter} from "@paradicms/api";
import {createWorksFilterControl} from "./createWorksFilterControl";

export const createWorksFilterControls = (kwds: {
  facets: readonly WorksFacet[];
  filters: readonly WorksFilter[];
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChangeFilters: (filters: readonly WorksFilter[]) => void;
}): readonly React.ReactElement[] => {
  const {facets, filters, getAbsoluteImageSrc, onChangeFilters} = kwds;

  const filterControls: React.ReactElement[] = [];

  filters.forEach((filter, filterI) => {
    const onChangeFilter = (newFilter: WorksFilter) => {
      const filtersCopy = kwds.filters.concat();
      filtersCopy[filterI] = newFilter;
      onChangeFilters(filtersCopy);
    };

    const control = createWorksFilterControl({
      facets,
      filter,
      getAbsoluteImageSrc,
      onChangeFilter,
    });

    if (control) {
      filterControls.push(control);
    }
  });

  return filterControls;
};
