import {Model} from "./Model";
import {RightsMixin} from "./RightsMixin";

export interface Text extends Model, RightsMixin {
  readonly value: string;
}
