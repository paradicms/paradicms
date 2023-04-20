import { Mixin } from "ts-mixer";
import { AgentUnion } from "../AgentUnion";
import { WorkCreation } from "../WorkCreation";
import { WorkLocationRole } from "../WorkLocationRole";
import { CmsContributorsMixin } from "./CmsContributorsMixin";
import { CmsCreatorsMixin } from "./CmsCreatorsMixin";
import { CmsWorkEvent } from "./CmsWorkEvent";

export class CmsWorkCreation extends Mixin(
  CmsWorkEvent,
  CmsContributorsMixin,
  CmsCreatorsMixin
) implements WorkCreation {
  get agents(): readonly AgentUnion[] {
    return this.contributors.concat(this.creators);
  }

  protected override get workLocationRole(): WorkLocationRole {
    return "Creation";
  }

  readonly type: "WorkCreation" = "WorkCreation";
}
