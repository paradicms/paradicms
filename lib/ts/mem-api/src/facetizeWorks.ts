import {
  StringPropertyValueFacet,
  WorkSubjectValueFacet,
  WorksFacet,
  WorksFilter,
} from "@paradicms/api";
import {ThumbnailSelector, Work} from "@paradicms/models";
import {deleteUndefined} from "@paradicms/utilities";
import {MutableValueFacetValue} from "./MutableValueFacetValue";
import {imageToValueFacetValueThumbnail} from "./imageToValueFacetThumbnail";

const facetizeWorksByStringPropertyValue = (kwds: {
  propertyIri: string;
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
}): StringPropertyValueFacet => {
  const {propertyIri, valueFacetValueThumbnailSelector, works} = kwds;
  let unknownCount: number = 0;
  const facetValues: {
    [index: string]: MutableValueFacetValue<string>;
  } = {};
  for (const work of works) {
    let workHasProperty = false;
    for (const propertyValue of work.propertyValuesByPropertyIri(propertyIri)) {
      const propertyValueString: string = propertyValue.value;
      let facetValue = facetValues[propertyValueString];
      if (facetValue) {
        facetValue.count++;
      } else {
        facetValue = {
          count: 1,
          label: propertyValue.label,
          value: propertyValueString,
          thumbnail: valueFacetValueThumbnailSelector
            ? imageToValueFacetValueThumbnail(
                propertyValue.thumbnail(valueFacetValueThumbnailSelector)
              )
            : undefined,
        };
        facetValues[propertyValueString] = deleteUndefined(facetValue);
      }
      workHasProperty = true;
    }
    if (!workHasProperty) {
      unknownCount++;
    }
  }
  return {
    propertyIri,
    type: "StringPropertyValue",
    unknownCount,
    values: Object.values(facetValues),
  };
};

const facetizeWorksByWorkSubjectValue = (kwds: {
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
}): WorkSubjectValueFacet => {
  const {valueFacetValueThumbnailSelector, works} = kwds;
  let unknownCount: number = 0;
  const facetValues: {
    [index: string]: MutableValueFacetValue<string>;
  } = {};
  for (const work of works) {
    if (work.subjects.length === 0) {
      unknownCount++;
      continue;
    }

    for (const workSubject of work.subjects) {
      let facetValue = facetValues[workSubject.value];
      if (facetValue) {
        facetValue.count++;
      } else {
        facetValue = {
          count: 1,
          label: workSubject.label,
          value: workSubject.value,
          thumbnail: valueFacetValueThumbnailSelector
            ? imageToValueFacetValueThumbnail(
                workSubject.thumbnail(valueFacetValueThumbnailSelector)
              )
            : undefined,
        };
        facetValues[workSubject.value] = deleteUndefined(facetValue);
      }
    }
  }
  return {
    type: "WorkSubjectValue",
    unknownCount,
    values: Object.values(facetValues),
  };
};

export const facetizeWorks = (kwds: {
  filters: readonly WorksFilter[];
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
}): readonly WorksFacet[] => {
  const {filters, valueFacetValueThumbnailSelector, works} = kwds;
  const facets: WorksFacet[] = [];
  for (const filter of filters) {
    switch (filter.type) {
      case "StringPropertyValue":
        facets.push(
          facetizeWorksByStringPropertyValue({
            propertyIri: filter.propertyIri,
            valueFacetValueThumbnailSelector,
            works,
          })
        );
        break;
      case "WorkSubjectValue":
        facets.push(
          facetizeWorksByWorkSubjectValue({
            valueFacetValueThumbnailSelector,
            works,
          })
        );
        break;
    }
  }
  return facets;
};
