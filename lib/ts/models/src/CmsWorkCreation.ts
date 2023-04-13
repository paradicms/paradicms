import {Mixin} from "ts-mixer";
import {Agent} from "./Agent";
import {WorkLocationRole} from "./WorkLocationRole";
import {CmsContributorsMixin} from "./CmsContributorsMixin";
import {CmsCreatorsMixin} from "./CmsCreatorsMixin";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {WorkCreation} from "./WorkCreation";

export class CmsWorkCreation extends Mixin(
  CmsWorkEvent,
  CmsContributorsMixin,
  CmsCreatorsMixin
) implements WorkCreation {
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
