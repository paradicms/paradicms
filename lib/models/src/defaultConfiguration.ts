import {Configuration} from "./Configuration";
import {StringPropertyValueFacet} from "StringPropertyValueFacet";
import {Facet} from "./Facet";
import {Filter} from "./Filter";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {PropertyDefinition} from "./PropertyDefinition";

const DCTERMS_NS = "http://purl.org/dc/terms/";

const facetedObjectPropertyDefinitions: readonly PropertyDefinition[] = [{
  label: "Medium",
  uri: DCTERMS_NS + "medium",
}, {
  label: "Subject",
  uri: DCTERMS_NS + "subject",
}];

export const defaultConfiguration: Configuration = {
  bootstrapStylesheetHref: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
  documentTitle: null,
  navbarTitle: null,
  objectSearch: (() => {
    const facets: Facet[] = [];
    const filters: Filter[] = [];
    for (const propertyDefinition of facetedObjectPropertyDefinitions) {
      const facet: StringPropertyValueFacet = {
        propertyUri: propertyDefinition.uri,
        type: "StringPropertyValue",
        values: [],
      };
      facets.push(facet);

      const filter: StringPropertyValueFilter = {
        label: propertyDefinition.label,
        propertyUri: propertyDefinition.uri,
        type: "StringPropertyValue",
        excludeValues: null,
        includeValues: null,
      };
      filters.push(filter);
    }
    return {
      facets,
      filters,
      fullTextSearchablePropertyUris: [DCTERMS_NS + "description", DCTERMS_NS + "title"],
    };
  })(),
};
