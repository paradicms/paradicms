import {existenceFilterSchema} from "./existenceFilterSchema";
import {z} from "zod";

export type ExistenceFilter = z.infer<typeof existenceFilterSchema>;
