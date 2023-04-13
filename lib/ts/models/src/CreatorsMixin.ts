import {Agent} from "./Agent";

export interface CreatorsMixin {
  get creators(): readonly (Agent | string)[];
  get creatorAgents(): readonly Agent[];
  get creatorAgentUris(): readonly string[];
}
