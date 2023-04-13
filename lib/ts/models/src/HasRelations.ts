import {ModelMixin} from "./ModelMixin";
import {dcterms} from "@paradicms/vocabularies";

export abstract class HasRelations extends ModelMixin {
  get wikipediaUrl(): string | null {
    return this.findAndMapObject(dcterms.relation, term =>
      term.termType === "NamedNode" &&
      term.value.match(/^https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\//)
        ? term.value
        : null
    );
  }

  get wikidataConceptUri(): string | null {
    return this.findAndMapObject(dcterms.relation, term =>
      term.termType === "NamedNode" &&
      term.value.match(/^https?:\/\/www\.wikidata\.org\/entity\//)
        ? term.value
        : null
    );
  }
}
