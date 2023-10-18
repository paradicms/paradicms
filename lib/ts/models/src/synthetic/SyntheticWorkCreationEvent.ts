import {DataFactory} from "@paradicms/rdf";
import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
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

  static fromWork(kwds: {date: PartialDateTimeDescription; work: Work}) {
    const {date, work} = kwds;
    return new SyntheticWorkCreationEvent({
      contributors: work.contributors,
      creators: work.creators,
      date,
      description: work.description,
      endDate: null,
      images: work.images,
      iri: DataFactory.namedNode(
        `paradicms:synthetic:workCreationEvent:${encodeURIComponent(
          work.iri.value
        )}`
      ),
      label: `Work created: ${work.label}`,
      location: null,
      startDate: null,
    });
  }

  readonly type: "WorkCreation" = "WorkCreation";

  readonly workLocationRole: WorkLocationRole = "Creation";
}
