import {z} from "zod";
import {propertyGroupsFilterSchema} from "./propertyGroupsFilterSchema";

export type PropertyGroupsFilter = z.infer<typeof propertyGroupsFilterSchema>;
