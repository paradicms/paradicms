import {WorkEvent} from "./WorkEvent";
import {Mixin} from "ts-mixer";
import {Agent} from "./Agent";
import {WorkLocationRole} from "./WorkLocationRole";
import {CmsContributorsMixin} from "./CmsContributorsMixin";
import {CmsCreatorsMixin} from "./CmsCreatorsMixin";

export class WorkCreation extends Mixin(
  WorkEvent,
  CmsContributorsMixin,
  CmsCreatorsMixin
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
