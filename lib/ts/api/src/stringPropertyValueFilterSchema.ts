import {z} from "zod";
import {propertyValueFilterSchema} from "./propertyValueFilterSchema";

export const stringPropertyValueFilterSchema = propertyValueFilterSchema.extend(
  {
    excludeValues: z.array(z.string()).optional(),
    includeValues: z.array(z.string()).optional(),
    type: z.literal("StringPropertyValue"),
  }
);
