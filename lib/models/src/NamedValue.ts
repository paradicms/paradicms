import {NamedModel} from "./NamedModel";
import {Literal, Term} from "n3";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";
import {HasAbstract, HasImages} from "./mixins";
import {Mixin} from "ts-mixer";
import {DCTERMS, RDF, SKOS} from "@paradicms/vocabularies";

export class NamedValue extends Mixin(NamedModel, HasAbstract, HasImages) {
  @Memoize()
  get altLabels(): readonly Literal[] {
    return this.propertyObjects(SKOS.altLabel).filter(
      (term) => term.termType === "Literal"
    ) as Literal[];
  }

  @Memoize()
  get prefLabel(): string | null {
    return (
      this.propertyObjects(SKOS.prefLabel).find(
        (term) => term.termType === "Literal"
      )?.value ?? null
    );
  }

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
