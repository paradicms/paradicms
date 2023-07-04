import {Model} from "./Model";
import {Point} from "./Point";

export interface Location extends Model {
  readonly centroid: Point | null;
  readonly label: string | null;
}
