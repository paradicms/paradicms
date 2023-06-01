import {dcterms, foaf, owl} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";

export abstract class CmsRelationsMixin extends ResourceBackedModelMixin {
  get page(): string | null {
    return this.findAndMapObject(foaf.page, term => {
      switch (term.termType) {
        case "Literal":
        case "NamedNode":
          return term.value;
        default:
          return null;
      }
    });
  }

  get wikipediaUrl(): string | null {
    return this.findAndMapObject(dcterms.relation, term =>
      term.termType === "NamedNode" &&
      term.value.match(/^https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\//)
        ? term.value
        : null
    );
  }

  get wikidataConceptIri(): string | null {
    return this.findAndMapObject(owl.sameAs, term =>
      term.termType === "NamedNode" &&
      term.value.match(/^https?:\/\/www\.wikidata\.org\/entity\//)
        ? term.value
        : null
    );
  }
}
