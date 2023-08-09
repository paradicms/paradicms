import {z} from "zod";

export const sortSchema = z.object({
  ascending: z.boolean(),
});
