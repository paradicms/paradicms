import { rdf, schema } from "@paradicms/vocabularies";
import { Literal, NamedNode } from "@rdfjs/types";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Concept } from "../Concept";
import { SchemaModel } from "./SchemaModel";

export class SchemaDefinedTerm extends Mixin(SchemaModel)
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
  get value(): Literal | NamedNode {
    return (
      this.findAndMapObject(rdf.value, term => {
        switch (term.termType) {
          case "Literal":
          case "NamedNode":
            return term as Literal | NamedNode;
          default:
            return null;
        }
      }) ?? this.iri
    );
  }
}
