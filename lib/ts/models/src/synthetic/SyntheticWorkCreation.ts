import {SyntheticWorkEvent} from "./SyntheticWorkEvent";
import {WorkCreation} from "../WorkCreation";
import {Mixin} from "ts-mixer";
import {AgentUnion} from "../AgentUnion";
import {SyntheticEventParameters} from "./SyntheticEventParameters";
import {WorkLocationRole} from "../WorkLocationRole";

export class SyntheticWorkCreation extends Mixin(SyntheticWorkEvent)
  implements WorkCreation {
  readonly contributors: readonly AgentUnion[];
  readonly creators: readonly AgentUnion[];

  constructor(
    kwds: {
      contributors: readonly AgentUnion[];
      creators: readonly AgentUnion[];
    } & SyntheticEventParameters
  ) {
    super(kwds);
    this.contributors = kwds.contributors;
    this.creators = kwds.creators;
  }

  get agents(): readonly AgentUnion[] {
    return this.contributors.concat(this.creators);
  }

  readonly type: "WorkCreation" = "WorkCreation";

  readonly workLocationRole: WorkLocationRole = "Creation";
}
