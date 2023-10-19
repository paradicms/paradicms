import {dcterms} from "@paradicms/vocabularies";
import {Property} from "./Property";

export const defaultProperties: readonly Pick<
  Property,
  "filterable" | "iri" | "label" | "searchable"
>[] = [
  {
    filterable: true,
    iri: dcterms.creator,
    label: "Creator",
    searchable: false,
  },
  {
    filterable: false,
    iri: dcterms.description,
    label: "Description",
    searchable: true,
  },
  {
    filterable: true,
    iri: dcterms.medium,
    label: "Medium",
    searchable: false,
  },
  {
    filterable: true,
    iri: dcterms.subject,
    label: "Subject",
    searchable: false,
  },
  {
    filterable: false,
    iri: dcterms.title,
    label: "Title",
    searchable: true,
  },
  {
    filterable: true,
    iri: dcterms.type,
    label: "Type",
    searchable: false,
  },
];
