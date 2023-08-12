import {KeyFilter} from "./KeyFilter";
import {Static, Union} from "runtypes";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {WorkCollectionValueFilter} from "./WorkCollectionValueFilter";

export const WorksFilter = Union(
  KeyFilter,
  StringPropertyValueFilter,
  WorkCollectionValueFilter
);

export type WorksFilter = Static<typeof WorksFilter>;
