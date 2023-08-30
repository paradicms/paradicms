import {EventsFilter} from "@paradicms/api";
import {filterModelsByKey} from "./filterModelsByKey";

export const filterEvents = <
  EventT extends {
    readonly key: string;
    readonly sortDate: Date | null;
  }
>(kwds: {
  events: readonly EventT[];
  filters: readonly EventsFilter[];
}): readonly EventT[] => {
  const {events, filters} = kwds;
  let filteredEvents = events;
  for (const filter of filters) {
    switch (filter.type) {
      case "EventSortDateExistence": {
        if (typeof filter.exists !== "undefined") {
          if (filter.exists) {
            filteredEvents = filteredEvents.filter(event => !!event.sortDate);
          } else {
            filteredEvents = filteredEvents.filter(event => !event.sortDate);
          }
        }
        break;
      }
      case "Key": {
        filteredEvents = filterModelsByKey({filter, models: filteredEvents});
        break;
      }
    }
  }
  return filteredEvents;
};
