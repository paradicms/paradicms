import {AgentUnion} from "../AgentUnion";
import {License} from "../License";
import {RightsStatement} from "../RightsStatement";
import {Text} from "../Text";
import {LiteralModel} from "./LiteralModel";

export class LiteralText extends LiteralModel implements Text {
  readonly contributors: readonly AgentUnion[] = [];
  readonly creators: readonly AgentUnion[] = [];
  readonly license: License | null = null;
  get requiresAttribution(): boolean {
    return this.license?.requiresAttribution ?? false;
  }
  readonly rightsHolders: readonly AgentUnion[] = [];
  readonly rightsStatement: RightsStatement | null = null;
  override toString(): string {
    return this.value;
  }
  get value(): string {
    return this.literal.value;
  }
}
