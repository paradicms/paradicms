import { Agent } from "../Agent";
import { License } from "../License";
import { RightsStatement } from "../RightsStatement";
import { Text } from "../Text";
import { LiteralModel } from "./LiteralModel";

export class LiteralText extends LiteralModel implements Text {
  get contributors(): readonly Agent[] {
    return [];
  }

  get creators(): readonly Agent[] {
    return [];
  }

  get licenses(): readonly License[] {
    return [];
  }

  get requiresAttribution() {
    return false;
  }

  get rightsHolders(): readonly Agent[] {
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
