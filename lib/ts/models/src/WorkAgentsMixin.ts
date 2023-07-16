import {WorkAgent} from "./WorkAgent";
import {AgentUnion} from "./AgentUnion";
import {Memoize} from "typescript-memoize";

export abstract class WorkAgentsMixin {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    const result: WorkAgent[] = [];

    for (const contributor of this.contributors) {
      result.push({
        agent: contributor,
        role: "Contributor",
      });
    }

    for (const creator of this.creators) {
      result.push({
        agent: creator,
        role: "Creator",
      });
    }

    return result;
  }

  abstract readonly contributors: readonly AgentUnion[];
  abstract readonly creators: readonly AgentUnion[];
}
