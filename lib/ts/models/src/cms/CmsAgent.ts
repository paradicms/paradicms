import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsNameMixin} from "./CmsNameMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {AgentType} from "../AgentType";

export abstract class CmsAgent
  extends Mixin(
    ResourceBackedModel,
    CmsImagesMixin,
    CmsNameMixin,
    CmsRelationsMixin
  )
  implements Agent {
  get label(): string {
    return this.name;
  }

  abstract readonly type: AgentType;

  get works() {
    return this.iri ? this.modelSet.agentWorks(this.iri) : [];
  }
}
