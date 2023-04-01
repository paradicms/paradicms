import {z} from "zod";
import {filterSchema} from "@paradicms/filters/dist/filterSchema";

export const workQuerySchema = z.object({
  filters: z.array(filterSchema),
  text: z.string().optional(),
});
