import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {SameAsMixin} from "./SameAsMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {Work} from "./Work";

export interface Person
  extends Model,
    ImagesMixin,
    SameAsMixin,
    ThumbnailMixin {
  readonly familyName: string | null;
  readonly givenName: string | null;
  readonly homepage: string | null;
  readonly label: string;
  readonly type: "Person";
  readonly wikipediaUrl: string | null;
  readonly wikidataConceptIri: string | null;
  readonly works: readonly Work[];
}
