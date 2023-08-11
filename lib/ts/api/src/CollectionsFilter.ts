import {collectionsFilterSchema} from "./collectionsFilterSchema";
import {z} from "zod";

export type CollectionsFilter = z.infer<typeof collectionsFilterSchema>;
