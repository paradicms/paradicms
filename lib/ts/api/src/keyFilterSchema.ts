import {z} from "zod";
import {filterSchema} from "./filterSchema";

export const keyFilterSchema = filterSchema.extend({
  /**
   * Exclude models that have the given keys.
   *
   * excludeKeys has precedence over includeKeys.
   */
  excludeKeys: z.array(z.string()).optional(),

  /**
   * Include models that have the given keys.
   *
   * Any model that does not have one of these keys is implicitly excluded.
   */
  includeKeys: z.array(z.string()).optional(),

  type: z.literal("Key"),
});
