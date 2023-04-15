import { Mixin } from "ts-mixer";
import { Agent } from "../Agent";
import { WorkCreation } from "../WorkCreation";
import { WorkEventVisitor } from "../WorkEventVisitor";
import { WorkLocationRole } from "../WorkLocationRole";
import { CmsContributorsMixin } from "./CmsContributorsMixin";
import { CmsCreatorsMixin } from "./CmsCreatorsMixin";
import { CmsWorkEvent } from "./CmsWorkEvent";

export class CmsWorkCreation extends Mixin(
  CmsWorkEvent,
  CmsContributorsMixin,
  CmsCreatorsMixin
) implements WorkCreation {
  accept<T>(visitor: WorkEventVisitor<T>): T {
    return visitor.visitWorkCreation(this);
  }

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
