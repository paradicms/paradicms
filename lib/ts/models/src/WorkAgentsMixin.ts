import {WorkAgent} from "./WorkAgent";
import {RightsMixin} from "./RightsMixin";
import {Text} from "./Text";
import {License} from "./License";
import {AgentUnion} from "./AgentUnion";
import {RightsStatement} from "./RightsStatement";
import {Memoize} from "typescript-memoize";

const getRightsWorkAgents = (
  rights: RightsMixin | null,
  rolePrefix: string
): readonly WorkAgent[] => {
  const result: WorkAgent[] = [];

  if (!rights) {
    return result;
  }

  for (const contributor of rights.contributors) {
    result.push({
      agent: contributor,
      role: rolePrefix + " contributor",
    });
  }

  for (const creator of rights.creators) {
    result.push({
      agent: creator,
      role: rolePrefix + " creator",
    });
  }

  for (const rightsHolder of rights.rightsHolders) {
    result.push({
      agent: rightsHolder,
      role: rolePrefix + " rights holder",
    });
  }

  return result;
};

export abstract class WorkAgentsMixin implements RightsMixin {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    result.push(...getRightsWorkAgents(this, "Work"));

    if (this.description) {
      result.push(...getRightsWorkAgents(this.description, "Text"));
    }

    return result;
  }

  abstract readonly description: Text | null;

  abstract readonly contributors: readonly AgentUnion[];
  abstract readonly creators: readonly AgentUnion[];
  abstract readonly licenses: readonly License[];
  abstract readonly requiresAttribution: boolean;
  abstract readonly rightsHolders: readonly AgentUnion[];
  abstract readonly rightsStatements: readonly RightsStatement[];
}
