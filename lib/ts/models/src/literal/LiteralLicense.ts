import {Literal} from "@rdfjs/types";
import {License} from "../License";
import {ModelToRdfTriple} from "../ModelToRdfTriple";

export class LiteralLicense implements License {
  constructor(private readonly literal: Literal) {}

  get label(): string {
    return this.literal.value;
  }
  requiresAttribution: boolean = true;
  toRdf(): readonly ModelToRdfTriple[] {
    throw new EvalError("not implemented");
  }
  uri: string | null = null;
}
