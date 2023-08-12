import {Number, Optional, Record} from "runtypes";
import {RuntypeBase} from "runtypes/lib/runtype";

export const GetModelKeysOptions = <
  QueryT extends RuntypeBase,
  SortT extends RuntypeBase
>(
  query: QueryT,
  sort: SortT
) =>
  Record({
    limit: Optional(Number),
    offset: Optional(Number),
    query: Optional(query),
    sort: Optional(sort),
  }).asReadonly();
