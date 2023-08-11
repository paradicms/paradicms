import {z} from "zod";
import {facetSchema} from "./facetSchema";

export type Facet = z.infer<typeof facetSchema>;
