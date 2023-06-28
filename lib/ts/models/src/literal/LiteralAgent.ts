import {Image} from "../Image";
import {OtherAgent} from "../OtherAgent";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {LiteralModel} from "./LiteralModel";
import {Work} from "../Work";

export class LiteralAgent extends LiteralModel implements OtherAgent {
  images: readonly Image[] = [];
  originalImages: readonly Image[] = [];
  homepage: string | null = null;
  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }
  type: "OtherAgent" = "OtherAgent";
  wikipediaUrl: string | null = null;
  wikidataConceptIri: string | null = null;
  readonly works: readonly Work[] = [];
}
