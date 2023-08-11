import {z} from "zod";
import {worksQuerySchema} from "./worksQuerySchema";

export type WorksQuery = z.infer<typeof worksQuerySchema>;
