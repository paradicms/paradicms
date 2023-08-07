import {
  defaultEventsSort,
  EventsSort,
  EventsSortProperty,
} from "@paradicms/api";
import {Event} from "@paradicms/models";

/**
 * Sort events in place.
 */
export const sortEvents = (events: Event[], sort: EventsSort): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case EventsSortProperty.DATE:
      events.sort(
        (left, right) => compareMultiplier * left.compareByDate(right)
      );
      return;
    case EventsSortProperty.LABEL:
      events.sort(
        (left, right) =>
          compareMultiplier * left.label.localeCompare(right.label)
      );
      return;
    default:
      sortEvents(events, defaultEventsSort);
      return;
  }
};
