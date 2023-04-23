import {ValueFacetValue} from "./ValueFacetValue";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {Facet} from "./Facet";

/**
 * Facet that creates a histogram of distinct values (model, property, value).
 *
 * Examples on Work include collections or subject terms.
 *
 * The naming follows that of Lucene/ElasticSearch (value and range facets).
 */
export interface ValueFacet<T extends JsonPrimitiveType> extends Facet {
  /**
   * Count of models that do not have a value for the property.
   */
  readonly unknownCount: number;

  /**
   * Histogram of distinct values.
   */
  readonly values: readonly ValueFacetValue<T>[];
}
