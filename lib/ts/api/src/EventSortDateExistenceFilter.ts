import {z} from "zod";
import {eventSortDateExistenceFilterSchema} from "./eventSortDateExistenceFilterSchema";

export type EventSortDateExistenceFilter = z.infer<
  typeof eventSortDateExistenceFilterSchema
>;
