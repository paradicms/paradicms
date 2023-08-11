import {worksFilterSchema} from "./worksFilterSchema";
import {z} from "zod";

export type WorksFilter = z.infer<typeof worksFilterSchema>;
