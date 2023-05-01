import {Model} from "../Model";
import {ModelToRdfTriple} from "../ModelToRdfTriple";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";

export class LiteralModel implements Model {
  constructor(protected readonly literal: Literal) {}

  get identifier(): BlankNode | NamedNode {
    throw new EvalError("not implemented");
  }

  get label(): string {
    return this.literal.value;
  }

  toRdf(): readonly ModelToRdfTriple[] {
    throw new EvalError("not implemented.");
  }

  uri: string | null = null;
}
