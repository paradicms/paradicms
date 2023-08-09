import {z} from "zod";
import {eventsFilterSchema} from "./eventsFilterSchema";

export const eventsQuerySchema = z.object({
  filters: z.array(eventsFilterSchema).optional(),
});
