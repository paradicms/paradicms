import {Literal} from "rdf-js";
import {Concept} from "../Concept";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {LiteralModel} from "./LiteralModel";

export class LiteralConcept extends LiteralModel implements Concept {
  readonly altLabels = [];
  readonly description = null;
  readonly images = [];

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  get value(): Literal {
    return this.literal;
  }
}
