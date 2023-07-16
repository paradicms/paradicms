import {LinkedArtModel} from "./LinkedArtModel";
import {Person} from "../Person";
import {requireNonNull} from "@paradicms/utilities";
import {Work} from "../Work";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {ModelIdentifier} from "../ModelIdentifier";

export class LinkedArtPerson extends LinkedArtModel implements Person {
  readonly familyName = null;
  readonly givenName = null;
  readonly homepage = null;

  get images(): readonly Image[] {
    return [];
  }

  override get label(): string {
    return requireNonNull(super.label);
  }

  get name(): string {
    return this.label;
  }

  get sameAsIdentifiers(): readonly ModelIdentifier[] {
    return [];
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
