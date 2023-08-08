import {Filter} from "./Filter";

/**
 * Filter that excludes/includes based on whether a model has a filtered property or not.
 */
export interface ExistenceFilter extends Filter {
  /**
   * If true, include models that have the filtered property and exclude those that do not.
   * If false, include models that do not have the filtered property and exclude those that do.
   * If undefined, no effect / include all models.
   */
  readonly exists?: boolean;
}
