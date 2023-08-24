import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {Work} from "./Work";

export interface Organization extends Model, ImagesMixin, ThumbnailMixin {
  readonly homepage: string | null;
  readonly label: string;
  readonly type: "Organization";
  readonly wikipediaUrl: string | null;
  readonly wikidataConceptIri: string | null;
  readonly works: readonly Work[];
}
