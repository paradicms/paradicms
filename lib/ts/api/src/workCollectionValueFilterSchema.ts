import {z} from "zod";
import {valueFilterSchema} from "./valueFilterSchema";

export const workCollectionValueFilterSchema = valueFilterSchema.extend({
  excludeValues: z.array(z.string()).optional(),
  includeValues: z.array(z.string()).optional(),
  type: z.literal("WorkCollectionValue"),
});
