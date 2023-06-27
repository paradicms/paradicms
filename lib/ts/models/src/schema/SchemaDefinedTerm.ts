import {Mixin} from "ts-mixer";
import {SchemaNamedModel} from "./SchemaNamedModel";
import {Concept} from "../Concept";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {rdf, schema} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";

export class SchemaDefinedTerm extends Mixin(SchemaNamedModel)
  implements Concept {
  @Memoize()
  get altLabels(): readonly Literal[] {
    return this.filterAndMapObjects(schema.alternateName, term => term.termType === "Literal" ? term as Literal : null);
  }

  override get label(): string {
    if (this.name) {
      return this.name;
    }
    for (const alternateName of this.alternateNames) {
      return alternateName;
    }
    return this.value.value;
  }

  @Memoize()
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
      }) ?? this.identifier
    );
  }
}
