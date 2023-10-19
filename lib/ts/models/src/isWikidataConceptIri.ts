import {NamedNode} from "@rdfjs/types";

export const isWikidataConceptIri = (iri: NamedNode) =>
  !!iri.value.match(/^https?:\/\/www\.wikidata\.org\/entity\//);
