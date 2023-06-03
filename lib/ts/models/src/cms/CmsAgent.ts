import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsNameMixin} from "./CmsNameMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {AgentType} from "../AgentType";
import {CmsModel} from "./CmsModel";

export abstract class CmsAgent
  extends Mixin(CmsModel, CmsImagesMixin, CmsNameMixin, CmsRelationsMixin)
  implements Agent {
  get label(): string {
    return this.name;
  }

  abstract readonly type: AgentType;

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
