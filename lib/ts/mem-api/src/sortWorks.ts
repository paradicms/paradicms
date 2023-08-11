import {defaultWorksSort, WorksSort, WorksSortProperty} from "@paradicms/api";
import {Work} from "@paradicms/models";

/**
 * Sort works in place.
 */
export const sortWorks = (sort: WorksSort, works: Work[]): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case WorksSortProperty.LABEL:
      works.sort(
        (left, right) =>
          compareMultiplier * left.label.localeCompare(right.label)
      );
      return;
    case WorksSortProperty.RELEVANCE:
      // Works are already sorted by relevance
      return;
    default:
      sortWorks(defaultWorksSort, works);
      return;
  }
};
