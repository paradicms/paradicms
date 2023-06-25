export const isWikidataConceptIri = (iri: string) =>
  !!iri.match(/^https?:\/\/www\.wikidata\.org\/entity\//);
