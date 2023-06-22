import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {AgentType} from "../AgentType";
import {CmsModel} from "./CmsModel";
import {requireNonNull} from "@paradicms/utilities";
import {foaf} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";

export abstract class CmsAgent
  extends Mixin(CmsModel, CmsImagesMixin, CmsRelationsMixin)
  implements Agent {
  get label(): string {
    return this.name;
  }

  get name(): string {
    return requireNonNull(this.findAndMapObject(foaf.name, mapTermToString));
  }

  abstract readonly type: AgentType;

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
