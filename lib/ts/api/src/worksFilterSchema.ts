import {z} from "zod";
import {stringPropertyValueFilterSchema} from "./stringPropertyValueFilterSchema";

export const worksFilterSchema = z.discriminatedUnion("type", [
  stringPropertyValueFilterSchema,
]);
