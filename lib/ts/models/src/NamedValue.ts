import {NamedModel} from "./NamedModel";
import {Literal, Term} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";
import {HasAbstract, HasImages} from "./mixins";
import {Mixin} from "ts-mixer";
import {dcterms, rdf, skos} from "@paradicms/vocabularies";

export class NamedValue extends Mixin(NamedModel, HasAbstract, HasImages) {
  @Memoize()
  get altLabels(): readonly Literal[] {
    return this.getObjects(skos.altLabel).filter(
      term => term.termType === "Literal"
    ) as Literal[];
  }

  @Memoize()
  get prefLabel(): string | null {
    return (
      this.getObjects(skos.prefLabel).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get propertyUris(): readonly string[] {
    const propertyUris: readonly string[] = this.getObjects(rdf.predicate)
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
      this.getObjects(dcterms.title).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get value(): Term {
    return requireDefined(this.getObjects(rdf.value)[0]);
  }
}
