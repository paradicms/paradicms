import {Filter} from "./Filter";

/**
 * Filter that excludes/includes based on whether a model has a filtered property or not.
 */
export interface ExistenceFilter extends Filter {
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
}
