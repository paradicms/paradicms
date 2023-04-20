import {z} from "zod";
import {filterUnionSchema} from "./filterUnionSchema";

export const worksQuerySchema = z.object({
  filters: z.array(filterUnionSchema),
  text: z.string().optional(),
});
