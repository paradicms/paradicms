import {Array, Number} from "runtypes";
import {Facet} from "./Facet";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {ValueFacetValue} from "./ValueFacetValue";

export const ValueFacet = <ValueT extends JsonPrimitiveType>(valueT: ValueT) =>
  Facet.extend({
    unknownCount: Number,
    values: Array(ValueFacetValue(valueT)).asReadonly(),
  }).asReadonly();

/**
 * Facet that creates a histogram of distinct values (model, property, value).
 *
 * Examples on Work include collections or subject terms.
 *
 * The naming follows that of Lucene/ElasticSearch (value and range facets).
 */
export interface ValueFacet<ValueT extends JsonPrimitiveType> extends Facet {
  /**
   * Count of models that do not have a value for the property.
   */
  readonly unknownCount: number;

  /**
   * Histogram of distinct values.
   */
  readonly values: readonly ValueFacetValue<ValueT>[];
}
