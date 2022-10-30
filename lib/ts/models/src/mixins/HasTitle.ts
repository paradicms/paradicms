import {requireDefined} from "../requireDefined";
import {DCTERMS} from "@paradicms/vocabularies";
import {NamedNode, Term} from "n3";

export abstract class HasTitle {
  protected abstract getObjects(property: NamedNode): readonly Term[];

  get title(): string {
    return requireDefined(
      this.getObjects(DCTERMS.title).find((term) => term.termType === "Literal")
    ).value;
  }
}
