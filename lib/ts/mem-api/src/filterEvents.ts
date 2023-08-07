import {EventSortDate} from "@paradicms/models";
import {EventsFilter} from "@paradicms/api";
import {filterModelsByKey} from "./filterModelsByKey";

export const filterEvents = <
  EventT extends {
    readonly key: string;
    readonly sortDate: EventSortDate | null;
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
        filteredEvents = filteredEvents.filter(event => !!event.sortDate);
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
