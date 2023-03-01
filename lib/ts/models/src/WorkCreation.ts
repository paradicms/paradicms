import {WorkEvent} from "./WorkEvent";
import {Mixin} from "ts-mixer";
import {HasCreators} from "./mixins/HasCreators";
import {HasContributors} from "./mixins/HasContributors";
import {Agent} from "./Agent";
import {WorkLocationRole} from "./WorkLocationRole";

export class WorkCreation extends Mixin(
  WorkEvent,
  HasContributors,
  HasCreators
) {
  get agents(): readonly Agent[] {
    return this.agentUris.map(agentUri => this.modelSet.agentByUri(agentUri));
  }

  get agentUris(): readonly string[] {
    return this.contributorAgentUris.concat(this.creatorAgentUris);
  }

  protected override get workLocationRole(): WorkLocationRole {
    return "Creation";
  }
}
