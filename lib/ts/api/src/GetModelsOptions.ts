import {GetModelKeysOptions} from "./GetModelKeysOptions";

export interface GetModelsOptions<JoinSelectorT, QueryT, SortT>
  extends GetModelKeysOptions<QueryT, SortT> {
  readonly joinSelector?: JoinSelectorT;
  readonly joinSelectorByKey?: {[index: string]: JoinSelectorT};
}
