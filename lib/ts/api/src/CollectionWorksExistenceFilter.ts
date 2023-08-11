import {Literal, Static} from "runtypes";
import {ExistenceFilter} from "./ExistenceFilter";

export const CollectionWorksExistenceFilter = ExistenceFilter.extend({
  type: Literal("CollectionWorksExistence"),
});

export type CollectionWorksExistenceFilter = Static<
  typeof CollectionWorksExistenceFilter
>;
