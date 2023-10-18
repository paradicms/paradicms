import {NamedNode} from "@rdfjs/types";
import {Image} from "../Image";
import {Location} from "../Location";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {Text} from "../Text";

export interface SyntheticEventParameters {
  date: PartialDateTimeDescription | null;
  description: Text | null;
  endDate: PartialDateTimeDescription | null;
  images: readonly Image[];
  iri: NamedNode;
  label: string;
  location: Location | null;
  startDate: PartialDateTimeDescription | null;
}
