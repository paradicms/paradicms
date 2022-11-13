import {foaf} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasPage extends ModelMixin {
  get page(): string | null {
    return (
      this.getObjects(foaf.page).find(term => {
        switch (term.termType) {
          case "Literal":
          case "NamedNode":
            return true;
          default:
            return false;
        }
      })?.value ?? null
    );
  }
}
