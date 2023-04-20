import {Model} from "./Model";

export interface License extends Model {
  readonly label: string;
  readonly requiresAttribution: boolean;
}
