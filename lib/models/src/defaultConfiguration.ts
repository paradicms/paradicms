import {Configuration} from "./Configuration";
import {StringPropertyValueFacet} from "StringPropertyValueFacet";
import {Facet} from "./Facet";
import {Filter} from "./Filter";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {PropertyDefinition} from "./PropertyDefinition";

const DCTERMS_NS = "http://purl.org/dc/terms/";

const facetedPropertyDefinitions: readonly PropertyDefinition[] = [{
  label: "Medium",
  uri: DCTERMS_NS + "medium",
}, {
  label: "Subject",
  uri: DCTERMS_NS + "subject",
}];

const objectFacets = () => {
  const result: Facet[] = [];
  for (const propertyDefinition of facetedPropertyDefinitions) {
    const facet: StringPropertyValueFacet = {
      propertyUri: propertyDefinition.uri,
      type: "StringPropertyValue",
      values: [],
    };
    result.push(facet);
  }
  return result;
};

const objectFilters = () => {
  const result: Filter[] = [];
  for (const propertyDefinition of facetedPropertyDefinitions) {
    const filter: StringPropertyValueFilter = {
      label: propertyDefinition.label,
      propertyUri: propertyDefinition.uri,
      type: "StringPropertyValue",
      excludeValues: null,
      includeValues: null,
    };
    result.push(filter);
  }
  return result;
};

export const defaultConfiguration: Configuration = {
  bootstrapStylesheetHref: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
  documentTitle: null,
  navbarTitle: null,
  objectFacets: objectFacets(),
  objectFilters: objectFilters(),
  objectFullTextSearchablePropertyUris: [DCTERMS_NS + "description", DCTERMS_NS + "title"],
};
