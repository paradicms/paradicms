import {DataFactory} from "@paradicms/rdf";
import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {Work} from "../Work";
import {WorkLocationRole} from "../WorkLocationRole";
import {WorkModificationEvent} from "../WorkModificationEvent";
import {SyntheticEventParameters} from "./SyntheticEventParameters";
import {SyntheticWorkEvent} from "./SyntheticWorkEvent";

export class SyntheticWorkModificationEvent extends Mixin(SyntheticWorkEvent)
  implements WorkModificationEvent {
  readonly contributors: readonly Agent[];

  constructor(
    kwds: {
      contributors: readonly Agent[];
    } & SyntheticEventParameters
  ) {
    super(kwds);
    this.contributors = kwds.contributors;
  }

  get agents(): readonly Agent[] {
    return this.contributors;
  }

  static fromWork(kwds: {date: PartialDateTimeDescription; work: Work}) {
    const {date, work} = kwds;
    return new SyntheticWorkModificationEvent({
      contributors: work.contributors,
      date: date,
      description: work.description,
      endDate: null,
      images: work.images,
      iri: DataFactory.namedNode(
        `paradicms:synthetic:workModificationEvent:${encodeURIComponent(
          work.iri.value
        )}`
      ),
      label: `Work modified: ${work.label}`,
      location: null,
      startDate: null,
    });
  }

  readonly type: "WorkModification" = "WorkModification";

  readonly workLocationRole: WorkLocationRole = "Modification";
}
