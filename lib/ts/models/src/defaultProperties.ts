import {dcterms} from "@paradicms/vocabularies";

export const defaultProperties: readonly {
  readonly filterable: boolean;
  readonly label: string;
  readonly searchable: boolean;
  readonly uri: string;
}[] = [
  {
    filterable: true,
    label: "Creator",
    searchable: false,
    uri: dcterms.creator.value,
  },
  {
    filterable: false,
    label: "Description",
    searchable: true,
    uri: dcterms.description.value,
  },
  {
    filterable: true,
    label: "Medium",
    searchable: false,
    uri: dcterms.medium.value,
  },
  {
    filterable: true,
    label: "Subject",
    searchable: false,
    uri: dcterms.subject.value,
  },
  {
    filterable: false,
    label: "Title",
    searchable: true,
    uri: dcterms.title.value,
  },
  {
    filterable: true,
    label: "Type",
    searchable: false,
    uri: dcterms.type.value,
  },
];
