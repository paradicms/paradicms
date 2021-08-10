import {Filter} from "./Filter";
import {PrimitiveType} from "./PrimitiveType";

/**
 * Filter that excludes/includes specific values where (model, filtered property, value).
 *
 * This filter is a companion to ValueFacet, which describes the universe of possible values for a given property.
 *
 * If none of exclude* or include* is set, then all models are implicitly included (i.e., the filter is a no-op).
 */
export interface ValueFilter<T extends PrimitiveType> extends Filter {
  /**
   * If true, exclude all models that have the filtered property.
   *
   * This is shorthand for excludeValues with all values from the universe.
   */
  readonly excludeKnown?: boolean;

  /**
   * If true, exclude all models that do not have the filtered property.
   * If false or undefined, include those models.
   */
  readonly excludeUnknown?: boolean;

  /**
   * Exclude models that have the filtered property with the given value.
   *
   * Any model that does not have the filtered property with the given value is implicitly included.
   *
   * excludeValues has precedence over includeValues.
   */
  readonly excludeValues?: readonly T[];

  /**
   * Include models that have the filtered property with the given value.
   *
   * Any model that does not have the filtered property with the given value is implicitly excluded.
   */
  readonly includeValues?: readonly T[];
}
