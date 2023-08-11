import {z} from "zod";
import {keyFilterSchema} from "./keyFilterSchema";
import {collectionWorksExistenceFilterSchema} from "./collectionWorksExistenceFilterSchema";

export const collectionsFilterSchema = z.discriminatedUnion("type", [
  collectionWorksExistenceFilterSchema,
  keyFilterSchema,
]);
