import {filterModelsByKey} from "./filterModelsByKey";
import {PropertiesFilter} from "@paradicms/api";

export const filterProperties = <
  PropertyT extends {
    readonly key: string;
  }
>(kwds: {
  properties: readonly PropertyT[];
  filters: readonly PropertiesFilter[];
}): readonly PropertyT[] => {
  const {properties, filters} = kwds;
  let filteredProperties = properties;
  for (const filter of filters) {
    switch (filter.type) {
      case "Key": {
        filteredProperties = filterModelsByKey({
          filter,
          models: filteredProperties,
        });
        break;
      }
    }
  }
  return filteredProperties;
};
