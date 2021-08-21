import {Configuration} from "./Configuration";
import {PropertyDefinition} from "./PropertyDefinition";

const DCTERMS_NS = "http://purl.org/dc/terms/";

const filterablePropertyDefinitions: readonly PropertyDefinition[] = [
  {
    label: "Medium",
    uri: DCTERMS_NS + "medium",
  },
  {
    label: "Subject",
    uri: DCTERMS_NS + "subject",
  },
];

export const defaultConfiguration: Configuration = {
  bootstrapStylesheetHref:
    "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
  documentTitle: null,
  navbarTitle: null,
  objectSearch: {
    filters: filterablePropertyDefinitions.map(propertyDefinition => ({
      label: propertyDefinition.label,
      propertyUri: propertyDefinition.uri,
      type: "StringPropertyValue",
    })),
    searchablePropertyUris: [DCTERMS_NS + "description", DCTERMS_NS + "title"],
  },
};
