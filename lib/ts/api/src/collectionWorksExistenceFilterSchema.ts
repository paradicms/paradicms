import {z} from "zod";
import {existenceFilterSchema} from "./existenceFilterSchema";

export const collectionWorksExistenceFilterSchema = existenceFilterSchema.extend(
  {
    type: z.literal("CollectionWorksExistence"),
  }
);
