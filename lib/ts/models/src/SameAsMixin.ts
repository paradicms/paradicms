import {Model} from "./Model";

export interface SameAsMixin<ModelT extends Model> {
  readonly sameAs: readonly ModelT[];
}
