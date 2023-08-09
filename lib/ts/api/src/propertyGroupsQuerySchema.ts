import {z} from "zod";
import {propertyGroupsFilterSchema} from "./propertyGroupsFilterSchema";

export const propertyGroupsQuerySchema = z.object({
  filters: z.array(propertyGroupsFilterSchema).optional(),
});
