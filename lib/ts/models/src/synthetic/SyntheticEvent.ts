import {Event} from "../Event";
import {DateTimeDescription} from "../DateTimeDescription";
import {ModelIdentifier} from "../ModelIdentifier";
import {Text} from "../Text";
import {Location} from "../Location";
import {DatasetCore} from "@rdfjs/types";
import {EventDerivedDatesMixin} from "../EventDerivedDatesMixin";
import {Mixin} from "ts-mixer";
import {SyntheticEventParameters} from "./SyntheticEventParameters";
import {Image} from "../Image";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {AgentUnion} from "../AgentUnion";
import {Model} from "../Model";

export abstract class SyntheticEvent
  extends Mixin(EventDerivedDatesMixin, SomeImageThumbnailMixin)
  implements Event {
  readonly date: DateTimeDescription | null;
  readonly description: Text | null;
  readonly endDate: DateTimeDescription | null;
  readonly key: string;
  readonly images: readonly Image[];
  readonly label: string;
  readonly location: Location | null;
  readonly startDate: DateTimeDescription | null;

  constructor(kwds: SyntheticEventParameters) {
    super();
    this.date = kwds.date;
    this.description = kwds.description;
    this.endDate = kwds.endDate;
    this.key = kwds.key;
    this.images = kwds.images;
    this.label = kwds.label;
    this.location = kwds.location;
    this.startDate = kwds.startDate;
  }

  abstract readonly agents: readonly AgentUnion[];

  get dependencies(): readonly Model[] {
    return [];
  }

  get identifiers(): readonly ModelIdentifier[] {
    return [];
  }

  get iris(): readonly string[] {
    return [];
  }

  toRdf(addToDataset: DatasetCore): void {}
}
