import {z} from "zod";
import {collectionsFilterSchema} from "./collectionsFilterSchema";

export const collectionsQuerySchema = z.object({
  filters: z.array(collectionsFilterSchema).optional(),
});
