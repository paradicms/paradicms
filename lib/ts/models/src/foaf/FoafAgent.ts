import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {FoafModel} from "./FoafModel";
import {requireNonNull} from "@paradicms/utilities";
import {foaf} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";
import {AgentType} from "../AgentType";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {isWikipediaUrl} from "../isWikipediaUrl";
import {Memoize} from "typescript-memoize";

export abstract class FoafAgent
  extends Mixin(
    FoafModel,
    FoafImagesMixin,
    OwlSameAsMixin,
    SomeImageThumbnailMixin
  )
  implements Agent {
  get label(): string {
    return this.name;
  }

  @Memoize()
  get homepage(): string | null {
    return this.findAndMapObject(foaf.homepage, term => {
      switch (term.termType) {
        case "Literal":
        case "NamedNode":
          return term.value;
        default:
          return null;
      }
    });
  }

  @Memoize()
  get name(): string {
    return requireNonNull(this.findAndMapObject(foaf.name, mapTermToString));
  }

  get wikipediaUrl(): string | null {
    return this.findAndMapObject(foaf.page, term =>
      term.termType === "NamedNode" && isWikipediaUrl(term.value)
        ? term.value
        : null
    );
  }

  abstract readonly type: AgentType;

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
