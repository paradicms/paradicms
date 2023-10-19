import {
  StringPropertyValueFilter,
  WorkCollectionValueFilter,
  WorkSubjectValueFilter,
  WorksFilter,
} from "@paradicms/api";
import {Work} from "@paradicms/models";
import {DataFactory} from "@paradicms/rdf";
import {filterModelsByIri} from "./filterModelsByIri";
import {testEventDateRangeFilter} from "./testEventDateRangeFilter";
import {testValueFilter} from "./testValueFilter";

export const filterWorks = (kwds: {
  filters: readonly WorksFilter[];
  workCollectionIris: {[index: string]: readonly string[]};
  works: readonly Work[];
}): readonly Work[] => {
  const {filters, workCollectionIris, works} = kwds;
  let filteredWorks = works;
  for (const filter of filters) {
    switch (filter.type) {
      case "Iri": {
        filteredWorks = filterModelsByIri({filter, models: filteredWorks});
        break;
      }
      case "StringPropertyValue": {
        filteredWorks = filteredWorks.filter(work =>
          testValueFilter(
            filter as StringPropertyValueFilter,
            work
              .propertyValuesByPropertyIri(
                DataFactory.namedNode(
                  (filter as StringPropertyValueFilter).propertyIri
                )
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
            workCollectionIris[work.iri.value] ?? []
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
            return !filter.end && !filter.start;
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
