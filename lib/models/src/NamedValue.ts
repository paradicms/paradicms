import {NamedModel} from "./NamedModel";
import {Term} from "n3";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";
import {HasAbstract, HasImages} from "./mixins";
import {Mixin} from "ts-mixer";
import {DCTERMS, RDF} from "@paradicms/vocabularies";

export class NamedValue extends Mixin(NamedModel, HasAbstract, HasImages) {
  get propertyUris(): readonly string[] {
    const propertyUris: readonly string[] = this.propertyObjects(RDF.predicate)
      .filter((term) => term.termType === "NamedNode")
      .map((term) => term.value);
    if (propertyUris.length === 0) {
      throw new RangeError("named value must link to one or more properties");
    }
    return propertyUris;
  }

  @Memoize()
  get title(): string | null {
    return (
      this.propertyObjects(DCTERMS.title).find(
        (term) => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get value(): Term {
    return requireDefined(this.propertyObjects(RDF.value)[0]);
  }
}
