import {Model} from "./Model";
import {RightsMixin} from "./RightsMixin";

export interface Text extends Model, RightsMixin {
  toString(): string;
  readonly value: string;
}
