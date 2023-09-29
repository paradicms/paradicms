import {DataFactory} from "@paradicms/rdf";
import {Memoize} from "typescript-memoize";
import {LinkedArtLinguisticObject} from "./LinkedArtLinguisticObject";
import {LinkedArtModelMixin} from "./LinkedArtModelMixin";

const descriptionType = DataFactory.namedNode(
  "http://vocab.getty.edu/aat/300080091"
);

export abstract class LinkedArtDescriptionMixin extends LinkedArtModelMixin {
  @Memoize()
  get description(): LinkedArtLinguisticObject | null {
    for (const model of this.isReferredToBy) {
      if (
        model instanceof LinkedArtLinguisticObject &&
        model.hasType.some(type => type.equals(descriptionType))
      ) {
        return model;
      }
    }
    return null;
  }

  protected preMemoizeDescription(): void {
    this.description;
  }
}
