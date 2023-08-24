import {mapTermToString} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {foaf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";
import {isWikipediaUrl} from "../isWikipediaUrl";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";

export abstract class FoafAgent extends Mixin(
  ResourceBackedModel,
  FoafImagesMixin,
  OwlSameAsMixin,
  SomeImageThumbnailMixin
) {
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

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
