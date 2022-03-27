// import {
//   CollectionValueFilter,
//   InstitutionValueFilter,
// } from "@paradicms/filters";
// import {PropertyConfiguration} from "./PropertyConfiguration";
// import {imputeAppConfiguration} from "./imputeAppConfiguration";
//
// const DCTERMS_NS = "http://purl.org/dc/terms/";
//
// const collectionValueFilter: CollectionValueFilter = {
//   label: "Collection",
//   type: "CollectionValue",
// };
//
// const institutionValueFilter: InstitutionValueFilter = {
//   label: "Institution",
//   type: "InstitutionValue",
// };
//
// const workProperties: PropertyConfiguration[] = [
//   {
//     filterable: true,
//     label: "Creator",
//     uri: DCTERMS_NS + "creator",
//   },
//   {
//     label: "Description",
//     hidden: true,
//     searchable: true,
//     uri: DCTERMS_NS + "description",
//   },
//   {
//     filterable: true,
//     label: "Medium",
//     uri: DCTERMS_NS + "medium",
//   },
//   {
//     filterable: true,
//     label: "Subject",
//     uri: DCTERMS_NS + "subject",
//   },
//   {
//     label: "Title",
//     hidden: true,
//     searchable: true,
//     uri: DCTERMS_NS + "title",
//   },
//   {
//     filterable: true,
//     label: "Type",
//     uri: DCTERMS_NS + "type",
//   },
// ];
//
// export const defaultAppConfiguration = imputeAppConfiguration({
//   bootstrapStylesheetHref:
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
//   workProperties,
//   search: {
//     filters: [collectionValueFilter, institutionValueFilter],
//   },
// });
