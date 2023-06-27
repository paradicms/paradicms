import {dcterms, foaf, owl} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {isWikidataConceptIri} from "../isWikidataConceptIri";
import {isWikipediaUrl} from "../isWikipediaUrl";

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
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }

  get wikidataConceptIri(): string | null {
    return this.findAndMapObject(owl.sameAs, term =>
      term.termType === "NamedNode" && isWikidataConceptIri(term.value)
        ? term.value
        : null
    );
  }
}
