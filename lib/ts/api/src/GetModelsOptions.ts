import {Dictionary, Optional} from "runtypes";
import {RuntypeBase} from "runtypes/lib/runtype";
import {GetModelIrisOptions} from "./GetModelIrisOptions";

export const GetModelsOptions = <
  JoinSelectorT extends RuntypeBase,
  QueryT extends RuntypeBase,
  SortT extends RuntypeBase
>(
  joinSelector: JoinSelectorT,
  query: QueryT,
  sort: SortT
) =>
  GetModelIrisOptions(query, sort).extend({
    joinSelector: Optional(joinSelector),
    joinSelectorByIri: Optional(Dictionary(joinSelector)),
  });
