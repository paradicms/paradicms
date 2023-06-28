import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Work} from "./Work";
import {AgentType} from "./AgentType";

export interface Agent extends Model, ImagesMixin {
  readonly homepage: string | null;
  readonly label: string;
  readonly type: AgentType;
  readonly wikipediaUrl: string | null;
  readonly wikidataConceptIri: string | null;
  readonly works: readonly Work[];
}
