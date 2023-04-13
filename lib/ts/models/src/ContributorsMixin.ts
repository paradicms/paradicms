import {Agent} from "./Agent";

export interface ContributorsMixin {
  get contributors(): readonly (Agent | string)[];
  get contributorAgents(): readonly Agent[];
  get contributorAgentUris(): readonly string[];
}
