import {SyntheticWorkEvent} from "./SyntheticWorkEvent";
import {Mixin} from "ts-mixer";
import {AgentUnion} from "../AgentUnion";
import {SyntheticEventParameters} from "./SyntheticEventParameters";
import {WorkLocationRole} from "../WorkLocationRole";
import {WorkModificationEvent} from "../WorkModificationEvent";
import {DateTimeDescription} from "../DateTimeDescription";
import {Work} from "../Work";

export class SyntheticWorkModificationEvent extends Mixin(SyntheticWorkEvent)
  implements WorkModificationEvent {
  readonly contributors: readonly AgentUnion[];

  constructor(
    kwds: {
      contributors: readonly AgentUnion[];
    } & SyntheticEventParameters
  ) {
    super(kwds);
    this.contributors = kwds.contributors;
  }

  get agents(): readonly AgentUnion[] {
    return this.contributors;
  }

  static fromWork(kwds: {date: DateTimeDescription; work: Work}) {
    const {date, work} = kwds;
    return new SyntheticWorkModificationEvent({
      contributors: work.contributors,
      date: date,
      description: null,
      endDate: null,
      label: `${work.label} modification`,
      key: `${work.key} modification`,
      location: null,
      startDate: null,
    });
  }

  readonly type: "WorkModification" = "WorkModification";

  readonly workLocationRole: WorkLocationRole = "Modification";
}
