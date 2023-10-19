import {Static, Union} from "runtypes";
import {IriFilter} from "./IriFilter";
import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {WorkCollectionValueFilter} from "./WorkCollectionValueFilter";
import {WorkCreationDateRangeFilter} from "./WorkCreationDateRangeFilter";
import {WorkSubjectValueFilter} from "./WorkSubjectValueFilter";

export const WorksFilter = Union(
  IriFilter,
  StringPropertyValueFilter,
  WorkCollectionValueFilter,
  WorkCreationDateRangeFilter,
  WorkSubjectValueFilter
);

export type WorksFilter = Static<typeof WorksFilter>;
