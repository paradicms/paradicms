import {Memoize} from "typescript-memoize";
import {Agent} from "./Agent";
import {WorkAgent} from "./WorkAgent";

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

  protected preMemoizeWorkAgents(): void {
    this.agents;
  }

  abstract readonly contributors: readonly Agent[];
  abstract readonly creators: readonly Agent[];
}
