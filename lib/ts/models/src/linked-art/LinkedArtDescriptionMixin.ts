import {LinkedArtModelMixin} from "./LinkedArtModelMixin";
import {LinkedArtLinguisticObject} from "./LinkedArtLinguisticObject";
import {DataFactory} from "@paradicms/rdf";

const descriptionType = DataFactory.namedNode(
  "http://vocab.getty.edu/aat/300080091"
);

export abstract class LinkedArtDescriptionMixin extends LinkedArtModelMixin {
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
}
