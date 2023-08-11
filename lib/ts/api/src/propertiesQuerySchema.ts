import {z} from "zod";
import {propertiesFilterSchema} from "./propertiesFilterSchema";

export const propertiesQuerySchema = z.object({
  filters: z.array(propertiesFilterSchema).optional(),
});
