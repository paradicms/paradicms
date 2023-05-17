import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {RelationsMixin} from "./RelationsMixin";
import {Work} from "./Work";

export interface Agent extends Model, ImagesMixin, RelationsMixin {
  readonly label: string;
  readonly works: readonly Work[];
}
