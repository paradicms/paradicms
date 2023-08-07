import {
  defaultWorkEventsSort,
  WorkEventsSort,
  WorkEventsSortProperty,
} from "@paradicms/api";
import {WorkEventWithWorkKey} from "./WorkEventWithWorkKey";

/**
 * Sort work events in place.
 */
export const sortWorkEvents = (
  sort: WorkEventsSort,
  workEvents: WorkEventWithWorkKey[]
): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case WorkEventsSortProperty.DATE:
      workEvents.sort(
        (left, right) =>
          compareMultiplier * left.workEvent.compareByDate(right.workEvent)
      );
      return;
    case WorkEventsSortProperty.LABEL:
      workEvents.sort(
        (left, right) =>
          compareMultiplier *
          left.workEvent.label.localeCompare(right.workEvent.label)
      );
      return;
    default:
      sortWorkEvents(defaultWorkEventsSort, workEvents);
      return;
  }
};
