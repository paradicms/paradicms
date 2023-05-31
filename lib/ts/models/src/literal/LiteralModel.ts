import {Model} from "../Model";
import {BlankNode, DatasetCore, Literal, NamedNode} from "@rdfjs/types";

export class LiteralModel implements Model {
  constructor(protected readonly literal: Literal) {}

  get identifier(): BlankNode | NamedNode {
    throw new EvalError("not implemented");
  }

  get label(): string {
    return this.literal.value;
  }

  get sameAsUris(): readonly string[] {
    return [];
  }

  toRdf(addToDataset: DatasetCore) {}

  uri: string | null = null;
}
