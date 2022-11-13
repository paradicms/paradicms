import {ModelMixin} from "./ModelMixin";
import {dcterms} from "@paradicms/vocabularies";

export abstract class HasRelations extends ModelMixin {
  get wikipediaUrl(): string | null {
    return (
      this.getObjects(dcterms.relation).find(term => {
        if (term.termType !== "NamedNode") {
          return false;
        }
        return term.value.match(/^https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\//);
      })?.value ?? null
    );
  }

  get wikidataConceptUri(): string | null {
    return (
      this.getObjects(dcterms.relation).find(term => {
        if (term.termType !== "NamedNode") {
          return false;
        }
        return term.value.match(/^https?:\/\/www\.wikidata\.org\/entity\//);
      })?.value ?? null
    );
  }
}
