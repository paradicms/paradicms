import {Static, Union} from "runtypes";
import {KeyFilter} from "./KeyFilter";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {WorkCollectionValueFilter} from "./WorkCollectionValueFilter";
import {WorkSubjectValueFilter} from "./WorkSubjectValueFilter";

export const WorksFilter = Union(
  KeyFilter,
  StringPropertyValueFilter,
  WorkCollectionValueFilter,
  WorkSubjectValueFilter
);

export type WorksFilter = Static<typeof WorksFilter>;
