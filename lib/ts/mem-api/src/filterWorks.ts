import {
  StringPropertyValueFilter,
  WorkCollectionValueFilter,
  WorkSubjectValueFilter,
  WorksFilter,
} from "@paradicms/api";
import {Work} from "@paradicms/models";
import {filterModelsByKey} from "./filterModelsByKey";
import {testEventDateRangeFilter} from "./testEventDateRangeFilter";
import {testValueFilter} from "./testValueFilter";

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
      case "WorkCreationDateRange": {
        filteredWorks = filteredWorks.filter(work => {
          const workCreationEvent = work.events.find(
            event => event.type === "WorkCreation"
          );
          if (!workCreationEvent) {
            return;
          }
          return testEventDateRangeFilter({
            event: workCreationEvent,
            filter,
          });
        });
        break;
      }
      case "WorkSubjectValue": {
        filteredWorks = filteredWorks.filter(work =>
          testValueFilter(
            filter as WorkSubjectValueFilter,
            work.subjects.map(subject => subject.value)
          )
        );
        break;
      }
    }
  }
  return filteredWorks;
};
