import {LocationsFilter} from "@paradicms/api";
import {filterModelsByKey} from "./filterModelsByKey";
import {Point} from "@paradicms/models";

export const filterLocations = <
  LocationT extends {readonly centroid: Point | null; readonly key: string}
>(kwds: {
  filters: readonly LocationsFilter[];
  locations: readonly LocationT[];
}): readonly LocationT[] => {
  const {filters, locations} = kwds;
  let filteredLocations = locations;
  for (const filter of filters) {
    switch (filter.type) {
      case "LocationCentroidExistence": {
        filteredLocations = filteredLocations.filter(
          location => location.centroid !== null
        );
        break;
      }
      case "Key": {
        filteredLocations = filterModelsByKey({
          filter,
          models: filteredLocations,
        });
        break;
      }
    }
  }
  return filteredLocations;
};
