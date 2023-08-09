import {WorksFacet} from "./WorksFacet";
import {GetModelsResult} from "./GetModelsResult";

export interface GetWorksResult extends GetModelsResult {
  readonly facets: readonly WorksFacet[];
}
