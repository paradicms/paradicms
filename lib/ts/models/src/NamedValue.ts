import {NamedModel} from "./NamedModel";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {HasAbstract, HasImages} from "./mixins";
import {Mixin} from "ts-mixer";
import {dcterms, rdf, skos} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class NamedValue extends Mixin(NamedModel, HasAbstract, HasImages) {
  @Memoize()
  get altLabels(): readonly Literal[] {
    return this.filterAndMapObjects(skos.altLabel, term =>
      term.termType === "Literal" ? (term as Literal) : null
    );
  }

  @Memoize()
  get prefLabel(): string | null {
    return this.findAndMapObject(skos.prefLabel, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get propertyUris(): readonly string[] {
    const propertyUris: readonly string[] = this.filterAndMapObjects(
      rdf.predicate,
      term => (term.termType === "NamedNode" ? term.value : null)
    );
    if (propertyUris.length === 0) {
      throw new RangeError("named value must link to one or more properties");
    }
    return propertyUris;
  }

  @Memoize()
  get title(): string | null {
    return this.findAndMapObject(dcterms.title, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get value(): BlankNode | Literal | NamedNode {
    return requireNonNull(
      this.findAndMapObject(rdf.value, term => {
        switch (term.termType) {
          case "BlankNode":
          case "Literal":
          case "NamedNode":
            return term as BlankNode | Literal | NamedNode;
          default:
            return null;
        }
      })
    );
  }
}
