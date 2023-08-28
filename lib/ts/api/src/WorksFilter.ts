import {Static, Union} from "runtypes";
import {KeyFilter} from "./KeyFilter";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {WorkCollectionValueFilter} from "./WorkCollectionValueFilter";
import {WorkCreationDateRangeFilter} from "./WorkCreationDateRangeFilter";
import {WorkSubjectValueFilter} from "./WorkSubjectValueFilter";

export const WorksFilter = Union(
  KeyFilter,
  StringPropertyValueFilter,
  WorkCollectionValueFilter,
  WorkCreationDateRangeFilter,
  WorkSubjectValueFilter
);

export type WorksFilter = Static<typeof WorksFilter>;
