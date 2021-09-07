import {Configuration} from "./Configuration";
import {InstitutionValueFilter} from "./InstitutionValueFilter";
import {CollectionValueFilter} from "./CollectionValueFilter";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";

const DCTERMS_NS = "http://purl.org/dc/terms/";

const collectionValueFilter: CollectionValueFilter = {
  label: "Collection",
  type: "CollectionValue",
};

const institutionValueFilter: InstitutionValueFilter = {
  label: "Institution",
  type: "InstitutionValue",
};

const filterablePropertyDefinitions = [
  {
    label: "Medium",
    uri: DCTERMS_NS + "medium",
  },
  {
    label: "Subject",
    uri: DCTERMS_NS + "subject",
  },
];

const stringPropertyValueFilters: readonly StringPropertyValueFilter[] = filterablePropertyDefinitions.map(
  propertyDefinition => ({
    label: propertyDefinition.label,
    propertyUri: propertyDefinition.uri,
    type: "StringPropertyValue",
  })
);

export const defaultConfiguration: Configuration = {
  bootstrapStylesheetHref:
    "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
  documentTitle: null,
  navbarTitle: null,
  workSearch: {
    filters: [
      collectionValueFilter,
      institutionValueFilter,
      ...stringPropertyValueFilters,
    ],
    searchablePropertyUris: [DCTERMS_NS + "description", DCTERMS_NS + "title"],
  },
};
