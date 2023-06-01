import {dcterms} from "@paradicms/vocabularies";

export const defaultProperties: readonly {
  readonly filterable: boolean;
  readonly label: string;
  readonly searchable: boolean;
  readonly iri: string;
}[] = [
  {
    filterable: true,
    label: "Creator",
    searchable: false,
    iri: dcterms.creator.value,
  },
  {
    filterable: false,
    label: "Description",
    searchable: true,
    iri: dcterms.description.value,
  },
  {
    filterable: true,
    label: "Medium",
    searchable: false,
    iri: dcterms.medium.value,
  },
  {
    filterable: true,
    label: "Subject",
    searchable: false,
    iri: dcterms.subject.value,
  },
  {
    filterable: false,
    label: "Title",
    searchable: true,
    iri: dcterms.title.value,
  },
  {
    filterable: true,
    label: "Type",
    searchable: false,
    iri: dcterms.type.value,
  },
];
