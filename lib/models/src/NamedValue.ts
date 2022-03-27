import {NamedModel} from "./NamedModel";
import {Literal} from "n3";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";
import {HasImages} from "./mixins";
import {Mixin} from "ts-mixer";
import {DCTERMS, RDF} from "@paradicms/vocabularies";

export class NamedValue extends Mixin(NamedModel, HasImages) {
  get propertyUris(): readonly string[] {
    const propertyUris: readonly string[] = this.propertyObjects(RDF.predicate)
      .filter(term => term.termType === "NamedNode")
      .map(term => term.value);
    if (propertyUris.length === 0) {
      throw new RangeError("named value must link to one or more properties");
    }
    return propertyUris;
  }

  @Memoize()
  get title(): string | null {
    return (
      this.propertyObjects(DCTERMS.title).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get value(): Literal {
    return requireDefined(
      this.propertyObjects(RDF.value).find(term => term.termType === "Literal")
    ) as Literal;
  }
}
