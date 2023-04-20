import {z} from "zod";
import {stringPropertyValueFilterSchema} from "./stringPropertyValueFilterSchema";

export const filterUnionSchema = z.discriminatedUnion("type", [
  stringPropertyValueFilterSchema,
]);
