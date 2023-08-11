import {z} from "zod";
import {stringPropertyValueFilterSchema} from "./stringPropertyValueFilterSchema";
import {keyFilterSchema} from "./keyFilterSchema";
import {workCollectionValueFilterSchema} from "./workCollectionValueFilterSchema";

export const worksFilterSchema = z.discriminatedUnion("type", [
  keyFilterSchema,
  stringPropertyValueFilterSchema,
  workCollectionValueFilterSchema,
]);
