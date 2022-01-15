import {requireDefined} from "../requireDefined";
import {FOAF} from "../vocabularies";
import {NamedNode, Term} from "n3";

export abstract class HasName {
  get name(): string {
    return requireDefined(
      this.propertyObjects(FOAF.name_).find(term => term.termType === "Literal")
    ).value;
  }

  protected abstract propertyObjects(property: NamedNode): readonly Term[];
}
