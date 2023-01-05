import {FormPropertyData} from "./FormPropertyData";
import {NamedNode} from "@rdfjs/types";
import {FormPropertyValue} from "./FormPropertyValue";

/**
 * Function that scores the suitability of one or more widgets vis a vis the given FormPropertyData.
 *
 * The scores use the system described at https://datashapes.org/forms.html#widgets
 *   0: the widget is not applicable at all
 *   between 1 and 100, the higher the better
 *   null if the widget may or may not be suitable, yet can be selected manually
 */
export type FormPropertyWidgetScorer = (kwds: {
  formProperty: FormPropertyData;
  formPropertyValues: readonly FormPropertyValue[];
}) => {
  score: number | null;
  widget: NamedNode;
};
