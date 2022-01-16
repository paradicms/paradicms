import {ModelMixin} from "./ModelMixin";
import {DCTERMS} from "../vocabularies";

export abstract class HasRelations extends ModelMixin {
  get wikipediaUrl(): string | null {
    return (
      this.propertyObjects(DCTERMS.relation).find(term => {
        if (term.termType !== "NamedNode") {
          return false;
        }
        return term.value.match(/^https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\//);
      })?.value ?? null
    );
  }

  get wikidataConceptUri(): string | null {
    return (
      this.propertyObjects(DCTERMS.relation).find(term => {
        if (term.termType !== "NamedNode") {
          return false;
        }
        return term.value.match(/^https?:\/\/www\.wikidata\.org\/entity\//);
      })?.value ?? null
    );
  }
}
