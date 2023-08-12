import {Dictionary, Optional} from "runtypes";
import {RuntypeBase} from "runtypes/lib/runtype";
import {GetModelKeysOptions} from "./GetModelKeysOptions";

export const GetModelsOptions = <
  JoinSelectorT extends RuntypeBase,
  QueryT extends RuntypeBase,
  SortT extends RuntypeBase
>(
  joinSelector: JoinSelectorT,
  query: QueryT,
  sort: SortT
) =>
  GetModelKeysOptions(query, sort).extend({
    joinSelector: Optional(joinSelector),
    joinSelectorByKey: Optional(Dictionary(joinSelector)),
  });
