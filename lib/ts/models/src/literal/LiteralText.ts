import {Literal} from "@rdfjs/types";
import {AgentUnion} from "../AgentUnion";
import {License} from "../License";
import {ModelToRdfTriple} from "../ModelToRdfTriple";
import {RightsStatement} from "../RightsStatement";
import {Text} from "../Text";

export class LiteralText implements Text {
  constructor(private readonly literal: Literal) {}

  readonly contributors: readonly AgentUnion[] = [];
  readonly creators: readonly AgentUnion[] = [];
  readonly license: License | null = null;
  get requiresAttribution(): boolean {
    return this.license?.requiresAttribution ?? false;
  }
  readonly rightsHolders: readonly AgentUnion[] = [];
  readonly rightsStatement: RightsStatement | null = null;
  toRdf(): readonly ModelToRdfTriple[] {
    throw new EvalError("not implemented");
  }
  readonly uri: string | null = null;
  get value(): string {
    return this.literal.value;
  }
}
