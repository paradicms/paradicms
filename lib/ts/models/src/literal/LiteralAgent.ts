import {Literal} from "@rdfjs/types";
import {Image} from "../Image";
import {ModelToRdfTriple} from "../ModelToRdfTriple";
import {OtherAgent} from "../OtherAgent";
import {ThumbnailSelector} from "../ThumbnailSelector";

export class LiteralAgent implements OtherAgent {
  constructor(private readonly literal: Literal) {}

  images: readonly Image[] = [];
  get label(): string {
    return this.literal.value;
  }
  originalImages: readonly Image[] = [];
  page: string | null = null;
  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }
  toRdf(): readonly ModelToRdfTriple[] {
    throw new EvalError("not implemented");
  }
  type: "OtherAgent" = "OtherAgent";
  uri: string | null = null;
  wikipediaUrl: string | null = null;
  wikidataConceptUri: string | null = null;
}
