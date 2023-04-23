import {Literal} from "@rdfjs/types";
import {ModelToRdfTriple} from "../ModelToRdfTriple";
import {RightsStatement} from "../RightsStatement";

export class LiteralRightsStatement implements RightsStatement {
  constructor(private readonly literal: Literal) {}

  get label(): string {
    return this.literal.value;
  }
  toRdf(): readonly ModelToRdfTriple[] {
    throw new EvalError("not implemented.");
  }
  uri: string | null = null;
}
