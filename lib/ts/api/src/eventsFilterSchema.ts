import {z} from "zod";
import {keyFilterSchema} from "./keyFilterSchema";
import {eventSortDateExistenceFilterSchema} from "./eventSortDateExistenceFilterSchema";

export const eventsFilterSchema = z.discriminatedUnion("type", [
  eventSortDateExistenceFilterSchema,
  keyFilterSchema,
]);
