import {z} from "zod";
import {propertiesFilterSchema} from "./propertiesFilterSchema";

export type PropertiesFilter = z.infer<typeof propertiesFilterSchema>;
