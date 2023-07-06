import {DateTimeDescription} from "../DateTimeDescription";
import {Text} from "../Text";
import {Location} from "../Location";
import {Image} from "../Image";

export interface SyntheticEventParameters {
  date: DateTimeDescription | null;
  description: Text | null;
  endDate: DateTimeDescription | null;
  images: readonly Image[];
  key: string;
  label: string;
  location: Location | null;
  startDate: DateTimeDescription | null;
}
