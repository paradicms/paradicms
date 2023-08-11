import {z} from "zod";
import {propertiesQuerySchema} from "./propertiesQuerySchema";

export type PropertiesQuery = z.infer<typeof propertiesQuerySchema>;
