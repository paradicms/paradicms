import {AgentUnion} from "../AgentUnion";
import {License} from "../License";
import {RightsStatement} from "../RightsStatement";
import {Text} from "../Text";
import {LiteralModel} from "./LiteralModel";

export class LiteralText extends LiteralModel implements Text {
  get contributors(): readonly AgentUnion[] {
    return [];
  }

  get creators(): readonly AgentUnion[] {
    return [];
  }

  get licenses(): readonly License[] {
    return [];
  }

  get requiresAttribution() {
    return false;
  }

  get rightsHolders(): readonly AgentUnion[] {
    return [];
  }

  get rightsStatements(): readonly RightsStatement[] {
    return [];
  }

  override toString(): string {
    return this.value;
  }

  get value(): string {
    return this.literal.value;
  }
}
