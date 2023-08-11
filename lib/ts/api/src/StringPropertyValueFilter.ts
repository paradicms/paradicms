import {z} from "zod";
import {stringPropertyValueFilterSchema} from "./stringPropertyValueFilterSchema";

export type StringPropertyValueFilter = z.infer<
  typeof stringPropertyValueFilterSchema
>;
