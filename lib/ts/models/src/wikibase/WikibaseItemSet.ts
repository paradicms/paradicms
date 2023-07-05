import {WikibaseItem} from "@paradicms/wikibase";

export class WikibaseItemSet {
  constructor(
    private readonly wikibaseItemsByIri: {[index: string]: WikibaseItem}
  ) {}

  wikibaseItemByIri(iri: string): WikibaseItem | null {
    return this.wikibaseItemsByIri[iri] ?? null;
  }
}
