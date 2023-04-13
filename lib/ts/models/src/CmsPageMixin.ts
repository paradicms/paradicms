import {foaf} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "./ResourceBackedModelMixin";

export abstract class CmsPageMixin extends ResourceBackedModelMixin {
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
}
