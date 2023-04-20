import {AgentVisitor} from "./AgentVisitor";
import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {RelationsMixin} from "./RelationsMixin";

export interface Agent extends Model, ImagesMixin, RelationsMixin {
  accept<T>(visitor: AgentVisitor<T>): T;
  readonly label: string;
}
