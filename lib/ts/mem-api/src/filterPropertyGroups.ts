import {filterModelsByKey} from "./filterModelsByKey";
import {PropertyGroupsFilter} from "@paradicms/api/dist/PropertyGroupsFilter";

export const filterPropertyGroups = <
  PropertyGroupT extends {
    readonly key: string;
  }
>(kwds: {
  propertyGroups: readonly PropertyGroupT[];
  filters: readonly PropertyGroupsFilter[];
}): readonly PropertyGroupT[] => {
  const {propertyGroups, filters} = kwds;
  let filteredPropertyGroups = propertyGroups;
  for (const filter of filters) {
    switch (filter.type) {
      case "Key": {
        filteredPropertyGroups = filterModelsByKey({
          filter,
          models: filteredPropertyGroups,
        });
        break;
      }
    }
  }
  return filteredPropertyGroups;
};
