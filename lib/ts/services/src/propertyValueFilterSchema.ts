import {z} from "zod";
import {valueFilterSchema} from "./valueFilterSchema";

export const propertyValueFilterSchema = valueFilterSchema.extend({
  propertyIri: z.string(),
});
