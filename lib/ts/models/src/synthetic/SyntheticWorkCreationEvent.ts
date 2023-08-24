import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {DateTimeDescription} from "../DateTimeDescription";
import {Work} from "../Work";
import {WorkCreationEvent} from "../WorkCreationEvent";
import {WorkLocationRole} from "../WorkLocationRole";
import {SyntheticEventParameters} from "./SyntheticEventParameters";
import {SyntheticWorkEvent} from "./SyntheticWorkEvent";

export class SyntheticWorkCreationEvent extends Mixin(SyntheticWorkEvent)
  implements WorkCreationEvent {
  readonly contributors: readonly Agent[];
  readonly creators: readonly Agent[];

  constructor(
    kwds: {
      contributors: readonly Agent[];
      creators: readonly Agent[];
    } & SyntheticEventParameters
  ) {
    super(kwds);
    this.contributors = kwds.contributors;
    this.creators = kwds.creators;
  }

  get agents(): readonly Agent[] {
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
