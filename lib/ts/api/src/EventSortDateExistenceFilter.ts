import {Literal, Static} from "runtypes";
import {ExistenceFilter} from "./ExistenceFilter";

export const EventSortDateExistenceFilter = ExistenceFilter.extend({
  type: Literal("EventSortDateExistence"),
}).asReadonly();

export type EventSortDateExistenceFilter = Static<
  typeof EventSortDateExistenceFilter
>;
