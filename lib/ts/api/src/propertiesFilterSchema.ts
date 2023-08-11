import {z} from "zod";
import {keyFilterSchema} from "./keyFilterSchema";

export const propertiesFilterSchema = z.discriminatedUnion("type", [
  keyFilterSchema,
]);
