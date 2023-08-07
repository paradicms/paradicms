import {StringPropertyValueFilter, WorksFilter} from "@paradicms/api";
import {Work} from "@paradicms/models";
import {testValueFilter} from "./testValueFilter";
import {CollectionValueFilter} from "@paradicms/api/dist/CollectionValueFilter";
import {filterModelsByKey} from "./filterModelsByKey";

export const filterWorks = (kwds: {
  filters: readonly WorksFilter[];
  workCollectionKeys: {[index: string]: readonly string[]};
  works: readonly Work[];
}): readonly Work[] => {
  const {filters, workCollectionKeys, works} = kwds;
  let filteredWorks = works;
  for (const filter of filters) {
    switch (filter.type) {
      case "CollectionValue": {
        filteredWorks = filteredWorks.filter(work =>
          testValueFilter(
            filter as CollectionValueFilter,
            workCollectionKeys[work.key] ?? []
          )
        );
        break;
      }
      case "Key": {
        filteredWorks = filterModelsByKey({filter, models: filteredWorks});
        break;
      }
      case "StringPropertyValue": {
        filteredWorks = filteredWorks.filter(work =>
          testValueFilter(
            filter as StringPropertyValueFilter,
            work
              .propertyValuesByPropertyIri(
                (filter as StringPropertyValueFilter).propertyIri
              )
              .map(propertyValue => propertyValue.value)
          )
        );
        break;
      }
    }
  }
  return filteredWorks;
};
