import {Array, Optional, Record, Static} from "runtypes";
import {CollectionsFilter} from "./CollectionsFilter";

const CollectionsQuery = Record({
  filters: Optional(Array(CollectionsFilter).asReadonly()),
}).asReadonly();

export type CollectionsQuery = Static<typeof CollectionsQuery>;
