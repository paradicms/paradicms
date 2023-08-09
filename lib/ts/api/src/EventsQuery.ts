import {z} from "zod";
import {eventsQuerySchema} from "./eventsQuerySchema";

export type EventsQuery = z.infer<typeof eventsQuerySchema>;
