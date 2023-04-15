import {dcterms} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";

export abstract class CmsRelationsMixin extends ResourceBackedModelMixin {
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
