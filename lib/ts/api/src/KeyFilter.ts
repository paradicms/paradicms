import {z} from "zod";
import {keyFilterSchema} from "./keyFilterSchema";

export type KeyFilter = z.infer<typeof keyFilterSchema>;
