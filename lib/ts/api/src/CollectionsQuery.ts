import {z} from "zod";
import {collectionsQuerySchema} from "./collectionsQuerySchema";

export type CollectionsQuery = z.infer<typeof collectionsQuerySchema>;
