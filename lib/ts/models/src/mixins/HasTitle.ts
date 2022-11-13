import {requireDefined} from "../requireDefined";
import {dcterms} from "@paradicms/vocabularies";
import {NamedNode, Term} from "@rdfjs/types";

export abstract class HasTitle {
  protected abstract getObjects(property: NamedNode): readonly Term[];

  get title(): string {
    return requireDefined(
      this.getObjects(dcterms.title).find(term => term.termType === "Literal")
    ).value;
  }
}
