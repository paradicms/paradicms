import {dcterms} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";

export const defaultProperties: readonly {
  readonly filterable: boolean;
  readonly iri: NamedNode;
  readonly label: string;
  readonly searchable: boolean;
}[] = [
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
