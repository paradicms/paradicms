import {Model} from "./Model";

export interface Location extends Model {
  readonly latitude: number;
  readonly longitude: number;
}
