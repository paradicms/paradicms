import {Model} from "../Model";
import {BlankNode, DatasetCore, Literal, NamedNode} from "@rdfjs/types";

export class LiteralModel implements Model {
  constructor(protected readonly literal: Literal) {}

  get identifiers(): readonly (BlankNode | NamedNode)[] {
    return [];
  }

  get iris(): readonly string[] {
    return [];
  }

  get label(): string {
    return this.literal.value;
  }

  toRdf(addToDataset: DatasetCore) {}

  iri: string | null = null;
}
