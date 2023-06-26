import {Event} from "../Event";
import {DateTimeDescription} from "../DateTimeDescription";
import {ModelIdentifier} from "../ModelIdentifier";
import {Text} from "../Text";
import {Location} from "../Location";
import {DatasetCore} from "@rdfjs/types";
import {EventMixin} from "../EventMixin";
import {Mixin} from "ts-mixer";
import {SyntheticEventParameters} from "./SyntheticEventParameters";

export class SyntheticEvent extends Mixin(EventMixin) implements Event {
  readonly date: DateTimeDescription | null;
  readonly description: Text | null;
  readonly endDate: DateTimeDescription | null;
  readonly key: string;
  readonly label: string;
  readonly location: Location | null;
  readonly startDate: DateTimeDescription | null;

  constructor(kwds: SyntheticEventParameters) {
    super();
    this.date = kwds.date;
    this.description = kwds.description;
    this.endDate = kwds.endDate;
    this.key = kwds.key;
    this.label = kwds.label;
    this.location = kwds.location;
    this.startDate = kwds.startDate;
  }

  get identifiers(): readonly ModelIdentifier[] {
    return [];
  }

  get iris(): readonly string[] {
    return [];
  }

  toRdf(addToDataset: DatasetCore): void {}
}
