import {AgentVisitor} from "./AgentVisitor";
import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {RelationsMixin} from "./RelationsMixin";

export interface Agent extends NamedModel, ImagesMixin, RelationsMixin {
  accept<T>(visitor: AgentVisitor<T>): T;
  readonly name: string;
  readonly page: string | null;
  toString(): string;
}
