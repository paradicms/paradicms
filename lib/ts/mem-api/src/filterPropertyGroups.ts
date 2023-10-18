import {PropertyGroupsFilter} from "@paradicms/api";
import {NamedNode} from "@rdfjs/types";
import {filterModelsByIri} from "./filterModelsByIri";

export const filterPropertyGroups = <
  PropertyGroupT extends {
    readonly iri: NamedNode;
  }
>(kwds: {
  propertyGroups: readonly PropertyGroupT[];
  filters: readonly PropertyGroupsFilter[];
}): readonly PropertyGroupT[] => {
  const {propertyGroups, filters} = kwds;
  let filteredPropertyGroups = propertyGroups;
  for (const filter of filters) {
    switch (filter.type) {
      case "Iri": {
        filteredPropertyGroups = filterModelsByIri({
          filter,
          models: filteredPropertyGroups,
        });
        break;
      }
    }
  }
  return filteredPropertyGroups;
};
