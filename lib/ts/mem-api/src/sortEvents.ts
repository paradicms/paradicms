import {defaultEventsSort, EventsSort} from "@paradicms/api";

/**
 * Sort events in place.
 */
export const sortEvents = <
  EventT extends {
    compareByDate(other: EventT): number;
    readonly label: string;
  }
>(
  events: EventT[],
  sort: EventsSort
): void => {
  const compareMultiplier = sort.ascending ? 1 : -1;
  switch (sort.property) {
    case "date":
      events.sort(
        (left, right) => compareMultiplier * left.compareByDate(right)
      );
      return;
    case "label":
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
