import {z} from "zod";
import {filterDiscriminatedUnionSchema} from "./filterDiscriminatedUnionSchema";

export const workQuerySchema = z.object({
  filters: z.array(filterDiscriminatedUnionSchema),
  text: z.string().optional(),
});
