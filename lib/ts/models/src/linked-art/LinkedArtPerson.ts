import { requireNonNull } from "@paradicms/utilities";
import { Image } from "../Image";
import { Person } from "../Person";
import { ThumbnailSelector } from "../ThumbnailSelector";
import { Work } from "../Work";
import { LinkedArtModel } from "./LinkedArtModel";

export class LinkedArtPerson extends LinkedArtModel implements Person {
  readonly familyName = null;
  readonly givenName = null;
  readonly homepage = null;
  readonly images = [];
  readonly sameAsIdentifiers = [];

  override get label(): string {
    return requireNonNull(super.label);
  }

  get name(): string {
    return this.label;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  readonly type: "Person" = "Person";

  readonly wikidataConceptIri = null;
  readonly wikipediaUrl = null;

  get works(): readonly Work[] {
    return this.modelSet.worksByAgentIri(this.iri);
  }
}
