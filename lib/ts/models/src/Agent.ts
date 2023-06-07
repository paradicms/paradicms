import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {RelationsMixin} from "./RelationsMixin";
import {Work} from "./Work";
import {AgentType} from "./AgentType";

export interface Agent extends Model, ImagesMixin, RelationsMixin {
  readonly label: string;
  readonly type: AgentType;
  readonly works: readonly Work[];
}
