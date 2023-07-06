import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {FoafModel} from "./FoafModel";
import {requireNonNull} from "@paradicms/utilities";
import {foaf} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";
import {AgentType} from "../AgentType";
import {FoafPageMixin} from "./FoafPageMixin";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";

export abstract class FoafAgent
  extends Mixin(
    FoafModel,
    FoafImagesMixin,
    FoafPageMixin,
    OwlSameAsMixin,
    SomeImageThumbnailMixin
  )
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
