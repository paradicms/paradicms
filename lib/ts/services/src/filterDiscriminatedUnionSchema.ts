import {z} from "zod";
import {stringPropertyValueFilterSchema} from "./stringPropertyValueFilterSchema";

export const filterDiscriminatedUnionSchema = z.discriminatedUnion("type", [
  stringPropertyValueFilterSchema,
]);
