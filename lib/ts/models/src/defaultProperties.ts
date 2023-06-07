import {dcterms} from "@paradicms/vocabularies";

export const defaultProperties: readonly {
  readonly filterable: boolean;
  readonly iris: readonly string[];
  readonly label: string;
  readonly searchable: boolean;
}[] = [
  {
    filterable: true,
    iris: [dcterms.creator.value],
    label: "Creator",
    searchable: false,
  },
  {
    filterable: false,
    iris: [dcterms.description.value],
    label: "Description",
    searchable: true,
  },
  {
    filterable: true,
    iris: [dcterms.medium.value],
    label: "Medium",
    searchable: false,
  },
  {
    filterable: true,
    iris: [dcterms.subject.value],
    label: "Subject",
    searchable: false,
  },
  {
    filterable: false,
    iris: [dcterms.title.value],
    label: "Title",
    searchable: true,
  },
  {
    filterable: true,
    iris: [dcterms.type.value],
    label: "Type",
    searchable: false,
  },
];
