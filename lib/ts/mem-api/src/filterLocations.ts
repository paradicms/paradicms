import {LocationsFilter} from "@paradicms/api";
import {Point} from "@paradicms/models";
import {NamedNode} from "@rdfjs/types";
import {filterModelsByIri} from "./filterModelsByIri";

export const filterLocations = <
  LocationT extends {readonly centroid: Point | null; readonly iri: NamedNode}
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
      case "Iri": {
        filteredLocations = filterModelsByIri({
          filter,
          models: filteredLocations,
        });
        break;
      }
    }
  }
  return filteredLocations;
};
