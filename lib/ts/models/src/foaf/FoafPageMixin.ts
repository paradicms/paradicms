import {foaf} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {isWikipediaUrl} from "../isWikipediaUrl";

export abstract class FoafPageMixin extends ResourceBackedModelMixin {
  get homepage(): string | null {
    return this.findAndMapObject(foaf.homepage, term => {
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
    return this.findAndMapObject(foaf.page, term =>
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }
}
