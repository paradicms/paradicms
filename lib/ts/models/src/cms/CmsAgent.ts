import { Mixin } from "ts-mixer";
import { Agent } from "../Agent";
import { AgentVisitor } from "../AgentVisitor";
import { ResourceBackedNamedModel } from "../ResourceBackedNamedModel";
import { CmsImagesMixin } from "./CmsImagesMixin";
import { CmsNameMixin } from "./CmsNameMixin";
import { CmsPageMixin } from "./CmsPageMixin";
import { CmsRelationsMixin } from "./CmsRelationsMixin";

export class CmsAgent extends Mixin(
  ResourceBackedNamedModel,
  CmsImagesMixin,
  CmsNameMixin,
  CmsPageMixin,
  CmsRelationsMixin
) implements Agent {
  accept<T>(visitor: AgentVisitor<T>): T {
    throw new EvalError();
  }
  
  override toString() {
    return this.name;
  }
}
