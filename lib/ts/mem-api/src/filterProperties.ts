import {PropertiesFilter} from "@paradicms/api";
import {NamedNode} from "@rdfjs/types";
import {filterModelsByIri} from "./filterModelsByIri";

export const filterProperties = <
  PropertyT extends {
    readonly iri: NamedNode;
  }
>(kwds: {
  properties: readonly PropertyT[];
  filters: readonly PropertiesFilter[];
}): readonly PropertyT[] => {
  const {properties, filters} = kwds;
  let filteredProperties = properties;
  for (const filter of filters) {
    switch (filter.type) {
      case "Iri": {
        filteredProperties = filterModelsByIri({
          filter,
          models: filteredProperties,
        });
        break;
      }
    }
  }
  return filteredProperties;
};
