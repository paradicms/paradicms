import {AgentUnion} from "./AgentUnion";

export interface CreatorsMixin {
  readonly creators: readonly AgentUnion[];
}
