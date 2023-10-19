import {DatasetCore, NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {Event} from "../Event";
import {EventDerivedDatesMixin} from "../EventDerivedDatesMixin";
import {Image} from "../Image";
import {Location} from "../Location";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {Text} from "../Text";
import {SyntheticEventParameters} from "./SyntheticEventParameters";

export abstract class SyntheticEvent
  extends Mixin(EventDerivedDatesMixin, SomeImageThumbnailMixin)
  implements Event {
  readonly date: PartialDateTimeDescription | null;
  readonly description: Text | null;
  readonly endDate: PartialDateTimeDescription | null;
  readonly iri: NamedNode;
  readonly images: readonly Image[];
  readonly label: string;
  readonly location: Location | null;
  readonly startDate: PartialDateTimeDescription | null;

  constructor(kwds: SyntheticEventParameters) {
    super();
    this.date = kwds.date;
    this.description = kwds.description;
    this.endDate = kwds.endDate;
    this.images = kwds.images;
    this.iri = kwds.iri;
    this.label = kwds.label;
    this.location = kwds.location;
    this.startDate = kwds.startDate;
  }

  abstract readonly agents: readonly Agent[];

  toRdf(addToDataset: DatasetCore): void {}
}
