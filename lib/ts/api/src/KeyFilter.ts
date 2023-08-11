import {Array, Literal, Optional, Static, String} from "runtypes";
import {Filter} from "./Filter";

export const KeyFilter = Filter.extend({
  /**
   * Exclude models that have the given keys.
   *
   * excludeKeys has precedence over includeKeys.
   */
  excludeKeys: Optional(Array(String)),

  /**
   * Include models that have the given keys.
   *
   * Any model that does not have one of these keys is implicitly excluded.
   */
  includeKeys: Optional(Array(String)),

  type: Literal("Key"),
});

export type KeyFilter = Static<typeof KeyFilter>;
