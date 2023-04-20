import {AgentUnion} from "./AgentUnion";

export interface ContributorsMixin {
  readonly contributors: readonly AgentUnion[];
}
