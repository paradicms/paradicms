import {Model} from "./Model";

export interface Location extends Model {
  readonly lat: number;
  readonly long: number;
}
