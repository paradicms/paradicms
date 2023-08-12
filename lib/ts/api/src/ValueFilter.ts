import {Array, Boolean, Optional, Record} from "runtypes";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {JsonPrimitiveRuntype} from "./JsonPrimitiveRuntype";

export const ValueFilter = <T extends JsonPrimitiveRuntype>(t: T) =>
  Record({
    excludeKnown: Optional(Boolean),
    excludeUnknown: Optional(Boolean),
    excludeValues: Optional(Array(t).asReadonly()),
    includeValues: Optional(Array(t).asReadonly()),
  }).asReadonly();

/**
 * Filter that excludes/includes models based on existence and values of (model, filtered property, value).
 *
 * This filter is a companion to ValueFacet, which describes the universe of possible values for a given property.
 *
 * The filter data structure is designed to be a minimal description of the subsets of the value universe to exclude and include.
 * For example, if there are more included values than excluded, it only specifies the excluded values.
 * The filter's compactness allows it to be serialized into a query string.
 *
 * If the filter is empty (i.e., none of exclude* or include* is set), then all models are implicitly included.
 */
export interface ValueFilter<T extends JsonPrimitiveType> {
  /**
   * If true, exclude all models that have the filtered property .
   *
   * This is shorthand for excludeValues with all values from the universe.
   */
  readonly excludeKnown?: boolean;

  /**
   * If true, exclude all models that do not have the filtered property.
   * If false or undefined, include those models.
   *
   * This switch is independent of exclusion/inclusion of known values.
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
