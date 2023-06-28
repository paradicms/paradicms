import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {AgentType} from "../AgentType";
import {CmsModel} from "./CmsModel";
import {requireNonNull} from "@paradicms/utilities";
import {foaf} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";

export abstract class CmsAgent
  extends Mixin(CmsModel, FoafImagesMixin, CmsRelationsMixin, OwlSameAsMixin)
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
