import {Model} from "./Model";

export interface NamedModel extends Model {
  readonly uri: string;
}
