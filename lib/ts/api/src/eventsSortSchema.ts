import {z} from "zod";
import {EventsSortProperty} from "./EventsSortProperty";
import {sortSchema} from "./sortSchema";

export const eventsSortSchema = sortSchema.extend({
  property: z.nativeEnum(EventsSortProperty),
});
