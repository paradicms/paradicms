import {LinkedArtModel} from "./LinkedArtModel";
import {Image} from "../Image";
import {Memoize} from "typescript-memoize";
import {la} from "@paradicms/vocabularies";
import {mapTermToImage} from "../mapTermToImage";

export class LinkedArtVisualItem extends LinkedArtModel {
  @Memoize()
  get digitallyShownBy(): Image | null {
    return this.findAndMapObject(la.digitally_shown_by, term =>
      mapTermToImage(this, term)
    );
  }
}
