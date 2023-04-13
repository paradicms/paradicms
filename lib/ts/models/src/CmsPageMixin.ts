import {foaf} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class CmsPageMixin extends ModelMixin {
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
