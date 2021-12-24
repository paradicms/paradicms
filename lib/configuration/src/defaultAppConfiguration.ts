import {AppConfiguration} from "./AppConfiguration";
import {
  CollectionValueFilter,
  InstitutionValueFilter,
  StringPropertyValueFilter,
} from "@paradicms/filters";

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

export const defaultAppConfiguration: AppConfiguration = {
  bootstrapStylesheetHref:
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
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
