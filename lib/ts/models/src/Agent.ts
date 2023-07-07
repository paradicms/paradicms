import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Work} from "./Work";
import {AgentType} from "./AgentType";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Agent extends Model, ImagesMixin, ThumbnailMixin {
  readonly homepage: string | null;
  readonly label: string;
  readonly type: AgentType;
  readonly wikipediaUrl: string | null;
  readonly wikidataConceptIri: string | null;
  readonly works: readonly Work[];
}
