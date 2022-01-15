import {requireDefined} from "../requireDefined";
import {DCTERMS} from "../vocabularies";
import {NamedNode, Term} from "n3";

export abstract class HasTitle {
  protected abstract propertyObjects(property: NamedNode): readonly Term[];

  get title(): string {
    return requireDefined(
      this.propertyObjects(DCTERMS.title).find(
        term => term.termType === "Literal"
      )
    ).value;
  }
}
