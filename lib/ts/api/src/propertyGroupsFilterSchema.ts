import {z} from "zod";
import {keyFilterSchema} from "./keyFilterSchema";

export const propertyGroupsFilterSchema = z.discriminatedUnion("type", [
  keyFilterSchema,
]);
