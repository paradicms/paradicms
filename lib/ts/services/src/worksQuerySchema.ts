import {z} from "zod";
import {filterDiscriminatedUnionSchema} from "./filterDiscriminatedUnionSchema";

export const worksQuerySchema = z.object({
  filters: z.array(filterDiscriminatedUnionSchema),
  text: z.string().optional(),
});
