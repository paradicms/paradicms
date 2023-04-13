import {Agent} from "./Agent";

export interface ContributorsMixin {
  readonly contributors: readonly (Agent | string)[];
  readonly contributorAgents: readonly Agent[];
  readonly contributorAgentUris: readonly string[];
}
