import {z} from "zod";
import {filterSchema} from "./filterSchema";

export type Filter = z.infer<typeof filterSchema>;
