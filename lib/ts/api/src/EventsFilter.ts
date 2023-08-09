import {eventsFilterSchema} from "./eventsFilterSchema";
import {z} from "zod";

// Discriminated union on "type"
export type EventsFilter = z.infer<typeof eventsFilterSchema>;
