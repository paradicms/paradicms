import {crm} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {LinkedArtModelMixin} from "./LinkedArtModelMixin";
import {LinkedArtVisualItem} from "./LinkedArtVisualItem";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";

export abstract class LinkedArtImagesMixin extends LinkedArtModelMixin
  implements ImagesMixin {
  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapObjects(crm.P138i_has_representation, term => {
      const model = mapTermToLinkedArtModel(this, term);
      if (!(model instanceof LinkedArtVisualItem)) {
        return null;
      }
      return model.digitallyShownBy;
    });
  }

  protected preMemoizeImages(): void {
    this.images;
  }
}
