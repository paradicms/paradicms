import {ValueFacetValue} from "./ValueFacetValue";
import {Facet} from "./Facet";
import {PrimitiveType} from "./PrimitiveType";

/**
 * Facet that creates a histogram of distinct values (model, property, value).
 *
 * Examples on Work include institution, collections, or subject terms.
 *
 * The naming follows that of Lucene/ElasticSearch (value and range facets).
 */
export interface ValueFacet<T extends PrimitiveType> extends Facet {
  /**
   * Count of models that do not have a value for the property.
   */
  readonly unknownCount: number;

  /**
   * Histogram of distinct values.
   */
  readonly values: readonly ValueFacetValue<T>[];
}
