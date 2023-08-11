import {Static, Union} from "runtypes";
import {CollectionWorksExistenceFilter} from "./CollectionWorksExistenceFilter";
import {KeyFilter} from "./KeyFilter";

export const CollectionsFilter = Union(
  CollectionWorksExistenceFilter,
  KeyFilter
);

export type CollectionsFilter = Static<typeof CollectionsFilter>;
