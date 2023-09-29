import { la } from "@paradicms/vocabularies";
import { Memoize } from "typescript-memoize";
import { Image } from "../Image";
import { mapTermToImage } from "../mapTermToImage";
import { LinkedArtModel } from "./LinkedArtModel";

export class LinkedArtVisualItem extends LinkedArtModel {
  @Memoize()
  get digitallyShownBy(): Image | null {
    return this.findAndMapObject(la.digitally_shown_by, term =>
      mapTermToImage(this, term)
    );
  }

  override preMemoize(): void {
    super.preMemoize();
    this.digitallyShownBy;
  }
}
