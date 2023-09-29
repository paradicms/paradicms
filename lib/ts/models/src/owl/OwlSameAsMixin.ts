import {owl} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {ModelIdentifier} from "../ModelIdentifier";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {SameAsMixin} from "../SameAsMixin";
import {isWikidataConceptIri} from "../isWikidataConceptIri";

export abstract class OwlSameAsMixin extends Mixin(ResourceBackedModelMixin)
  implements SameAsMixin {
  protected preMemoizeSameAs(): void {
    this.sameAsIdentifiers;
    this.wikidataConceptIri;
  }

  @Memoize()
  get sameAsIdentifiers(): readonly ModelIdentifier[] {
    return this.filterAndMapObjects(owl.sameAs, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
          return term as ModelIdentifier;
        default:
          return null;
      }
    });
  }

  @Memoize()
  get wikidataConceptIri(): string | null {
    return this.findAndMapObject(owl.sameAs, term =>
      term.termType === "NamedNode" && isWikidataConceptIri(term.value)
        ? term.value
        : null
    );
  }
}
