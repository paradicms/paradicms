import {Filter} from "./Filter";

export interface KeyFilter extends Filter {
  /**
   * Exclude models that have the given keys.
   *
   * excludeKeys has precedence over includeKeys.
   */
  readonly excludeKeys?: readonly string[];

  /**
   * Include models that have the given keys.
   *
   * Any model that does not have one of these keys is implicitly excluded.
   */
  readonly includeKeys?: readonly string[];

  readonly type: "Key";
}
