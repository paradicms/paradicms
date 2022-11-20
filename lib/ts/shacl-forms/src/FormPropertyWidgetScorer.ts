import {FormProperty} from "./FormProperty";
import {NamedNode} from "@rdfjs/types";
import {FormPropertyValue} from "./FormPropertyValue";

export interface FormPropertyWidgetScorer {
  /**
   * Score the suitability of this widget to the given FormProperty.
   *
   * The scores use the system described at https://datashapes.org/forms.html#widgets
   *   0: the widget is not applicable at all
   *   between 1 and 100, the higher the better
   *   null if the widget may or may not be suitable, yet can be selected manually
   * @param formProperty
   */
  score(
    formProperty: FormProperty,
    formPropertyValues: readonly FormPropertyValue[]
  ): number | null;
  readonly widgetName: NamedNode;
}
