import {Static, Union} from "runtypes";
import {CollectionWorksExistenceFilter} from "./CollectionWorksExistenceFilter";
import {IriFilter} from "./IriFilter";

export const CollectionsFilter = Union(
  CollectionWorksExistenceFilter,
  IriFilter
);

export type CollectionsFilter = Static<typeof CollectionsFilter>;
