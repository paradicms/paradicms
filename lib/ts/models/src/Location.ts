import {Model} from "./Model";

export interface Location extends Model {
  node: any;
  readonly lat: number;
  readonly long: number;
}
