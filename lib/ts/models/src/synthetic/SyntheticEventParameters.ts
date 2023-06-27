import {DateTimeDescription} from "../DateTimeDescription";
import {Text} from "../Text";
import {Location} from "../Location";

export interface SyntheticEventParameters {
  date: DateTimeDescription | null;
  description: Text | null;
  endDate: DateTimeDescription | null;
  key: string;
  label: string;
  location: Location | null;
  startDate: DateTimeDescription | null;
}
