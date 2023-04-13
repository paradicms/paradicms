import {Agent} from "./Agent";

export interface CreatorsMixin {
  readonly creators: readonly (Agent | string)[];
  readonly creatorAgents: readonly Agent[];
  readonly creatorAgentUris: readonly string[];
}
