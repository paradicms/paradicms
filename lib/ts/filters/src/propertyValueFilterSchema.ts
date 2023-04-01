import {z} from "zod";
import {valueFilterSchema} from "./valueFilterSchema";

export const propertyValueFilterSchema = valueFilterSchema.extend({
  propertyUri: z.string(),
});
