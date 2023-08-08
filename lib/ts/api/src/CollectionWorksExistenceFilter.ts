import {z} from "zod";
import {collectionWorksExistenceFilterSchema} from "./collectionWorksExistenceFilterSchema";

export type CollectionWorksExistenceFilter = z.infer<
  typeof collectionWorksExistenceFilterSchema
>;
