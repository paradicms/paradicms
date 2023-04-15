import {NamedModel} from "./NamedModel";
import {ImagesMixin} from "./ImagesMixin";
import {AgentVisitor} from "AgentVisitor";

export interface Agent extends NamedModel, ImagesMixin {
  accept<T>(visitor: AgentVisitor<T>): T;
  readonly name: string;
  readonly page: string | null;
  toString(): string;
}
