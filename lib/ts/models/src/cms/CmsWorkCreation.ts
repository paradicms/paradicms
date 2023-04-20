import {Mixin} from "ts-mixer";
import {WorkCreation} from "../WorkCreation";
import {WorkEventVisitor} from "../WorkEventVisitor";
import {WorkLocationRole} from "../WorkLocationRole";
import {CmsContributorsMixin} from "./CmsContributorsMixin";
import {CmsCreatorsMixin} from "./CmsCreatorsMixin";
import {CmsWorkEvent} from "./CmsWorkEvent";
import {AgentUnion} from "../AgentUnion";

export class CmsWorkCreation extends Mixin(
  CmsWorkEvent,
  CmsContributorsMixin,
  CmsCreatorsMixin
) implements WorkCreation {
  accept<T>(visitor: WorkEventVisitor<T>): T {
    return visitor.visitWorkCreation(this);
  }

  get agents(): readonly AgentUnion[] {
    return this.contributors.concat(this.creators);
  }

  protected override get workLocationRole(): WorkLocationRole {
    return "Creation";
  }
}
