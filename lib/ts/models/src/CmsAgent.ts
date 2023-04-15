import { Mixin } from "ts-mixer";
import { Agent } from "./Agent";
import { AgentVisitor } from "./AgentVisitor";
import { CmsImagesMixin } from "./CmsImagesMixin";
import { CmsNameMixin } from "./CmsNameMixin";
import { CmsPageMixin } from "./CmsPageMixin";
import { CmsRelationsMixin } from "./CmsRelationsMixin";
import { ResourceBackedNamedModel } from "./ResourceBackedNamedModel";

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
