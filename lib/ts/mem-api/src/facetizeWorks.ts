import {
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  WorksFacet,
  WorksFilter,
} from "@paradicms/api";
import {ThumbnailSelector, Work} from "@paradicms/models";
import {imageToValueFacetValueThumbnail} from "./imageToValueFacetThumbnail";
import {MutableValueFacetValue} from "./MutableValueFacetValue";
import {deleteUndefined} from "@paradicms/utilities";

export const facetizeWorks = (kwds: {
  filters: readonly WorksFilter[];
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
}): readonly WorksFacet[] => {
  const {filters, valueFacetValueThumbnailSelector, works} = kwds;
  const facets: WorksFacet[] = [];
  for (const filter of filters) {
    switch (filter.type) {
      case "StringPropertyValue": {
        const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
        let unknownCount: number = 0;
        const facetValues: {
          [index: string]: MutableValueFacetValue<string>;
        } = {};
        for (const work of works) {
          let workHasProperty = false;
          for (const propertyValue of work.propertyValuesByPropertyIri(
            concreteFilter.propertyIri
          )) {
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
        const facet: StringPropertyValueFacet = {
          propertyIri: concreteFilter.propertyIri,
          type: "StringPropertyValue",
          unknownCount,
          values: Object.values(facetValues),
        };
        facets.push(facet);
        break;
      }
    }
  }
  return facets;
};
