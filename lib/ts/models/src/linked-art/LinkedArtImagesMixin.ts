import {LinkedArtModelMixin} from "./LinkedArtModelMixin";
import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {crm} from "@paradicms/vocabularies";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";
import {LinkedArtVisualItem} from "./LinkedArtVisualItem";

export abstract class LinkedArtImagesMixin extends LinkedArtModelMixin
  implements ImagesMixin {
  get images(): readonly Image[] {
    return this.filterAndMapObjects(crm.P138i_has_representation, term => {
      const model = mapTermToLinkedArtModel(this, term);
      if (!(model instanceof LinkedArtVisualItem)) {
        return null;
      }
      return model.digitallyShownBy;
    });
  }
}
