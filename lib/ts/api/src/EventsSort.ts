import {z} from "zod";
import {eventsSortSchema} from "./eventsSortSchema";

export type EventsSort = z.infer<typeof eventsSortSchema>;
