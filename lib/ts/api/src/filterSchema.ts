import {z} from "zod";

export const filterSchema = z.object({
  label: z.string().optional(),
  type: z.string(),
});
