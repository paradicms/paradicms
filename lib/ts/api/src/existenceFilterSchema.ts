import {z} from "zod";
import {filterSchema} from "./filterSchema";

export const existenceFilterSchema = filterSchema.extend({
  excludeKnown: z.boolean().optional(),
  excludeUnknown: z.boolean().optional(),
});
