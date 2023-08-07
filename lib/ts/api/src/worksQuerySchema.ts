import {z} from "zod";
import {worksFilterSchema} from "./worksFilterSchema";

export const worksQuerySchema = z.object({
  filters: z.array(worksFilterSchema),
  text: z.string().optional(),
});
