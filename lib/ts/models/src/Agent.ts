import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {RelationsMixin} from "./RelationsMixin";

export interface Agent extends Model, ImagesMixin, RelationsMixin {
  readonly label: string;
}
