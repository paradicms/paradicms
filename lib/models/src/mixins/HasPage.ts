import {FOAF} from "../vocabularies";
import {NamedNode, Term} from "n3";

export abstract class HasPage {
  protected abstract propertyObjects(property: NamedNode): readonly Term[];

  get page(): string | null {
    return (
      this.propertyObjects(FOAF.page).find(term => {
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
