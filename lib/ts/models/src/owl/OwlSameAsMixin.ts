import {Mixin} from "ts-mixer";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {SameAsMixin} from "../SameAsMixin";
import {ModelIdentifier} from "../ModelIdentifier";
import {owl} from "@paradicms/vocabularies";

export abstract class OwlSameAsMixin extends Mixin(ResourceBackedModelMixin)
  implements SameAsMixin {
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
}
