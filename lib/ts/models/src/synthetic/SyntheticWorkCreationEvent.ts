import {SyntheticWorkEvent} from "./SyntheticWorkEvent";
import {WorkCreationEvent} from "../WorkCreationEvent";
import {Mixin} from "ts-mixer";
import {AgentUnion} from "../AgentUnion";
import {SyntheticEventParameters} from "./SyntheticEventParameters";
import {WorkLocationRole} from "../WorkLocationRole";
import {DateTimeDescription} from "../DateTimeDescription";
import {Work} from "../Work";

export class SyntheticWorkCreationEvent extends Mixin(SyntheticWorkEvent)
  implements WorkCreationEvent {
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

  static fromWork(kwds: {date: DateTimeDescription; work: Work}) {
    const {date, work} = kwds;
    return new SyntheticWorkCreationEvent({
      contributors: work.contributors,
      creators: work.creators,
      date,
      description: work.description,
      endDate: null,
      images: work.images,
      label: `Work created: ${work.label}`,
      key: `${work.key} creation`,
      location: null,
      startDate: null,
    });
  }

  readonly type: "WorkCreation" = "WorkCreation";

  readonly workLocationRole: WorkLocationRole = "Creation";
}
