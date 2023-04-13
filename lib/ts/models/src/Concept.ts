import {NamedModel} from "./NamedModel";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {rdf, skos} from "@paradicms/vocabularies";
import {HasDescription} from "./HasDescription";
import {HasImages} from "./HasImages";

export class Concept extends Mixin(NamedModel, HasDescription, HasImages) {
  @Memoize()
  get altLabels(): readonly Literal[] {
    return this.filterAndMapObjects(skos.altLabel, term =>
      term.termType === "Literal" ? (term as Literal) : null
    );
  }

  @Memoize()
  get prefLabel(): string | null {
    return this.findAndMapObject(skos.prefLabel, this.mapStringObject);
  }

  get value(): BlankNode | Literal | NamedNode {
    return (
      this.findAndMapObject(rdf.value, term => {
        switch (term.termType) {
          case "BlankNode":
          case "Literal":
          case "NamedNode":
            return term as BlankNode | Literal | NamedNode;
          default:
            return null;
        }
      }) ?? this.node
    );
  }
}
