import {z} from "zod";
import {existenceFilterSchema} from "./existenceFilterSchema";

export const eventSortDateExistenceFilterSchema = existenceFilterSchema.extend({
  type: z.literal("EventSortDateExistence"),
});
