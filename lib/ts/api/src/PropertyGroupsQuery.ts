import {z} from "zod";
import {propertyGroupsQuerySchema} from "./propertyGroupsQuerySchema";

export type PropertyGroupsQuery = z.infer<typeof propertyGroupsQuerySchema>;
