import {
  StringPropertyValueFilter,
  WorkCollectionValueFilter,
  WorksFilter,
} from "@paradicms/api";
import {Work} from "@paradicms/models";
import {testValueFilter} from "./testValueFilter";
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
      case "WorkCollectionValue": {
        filteredWorks = filteredWorks.filter(work =>
          testValueFilter(
            filter as WorkCollectionValueFilter,
            workCollectionKeys[work.key] ?? []
          )
        );
        break;
      }
    }
  }
  return filteredWorks;
};
