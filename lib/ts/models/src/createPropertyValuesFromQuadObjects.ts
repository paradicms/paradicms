import {ModelSet} from "./ModelSet";
import {Quad} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";

export const createPropertyValuesFromQuadObjects = (
  modelSet: ModelSet,
  quads: readonly Quad[]
): readonly PropertyValue[] => {
  const propertyValues: PropertyValue[] = [];
  for (const quad of quads) {
    const propertyValue = createPropertyValueFromTerm(
      modelSet,
      quad.object,
      quad.graph
    );
    if (propertyValue) {
      propertyValues.push(propertyValue);
    }
  }
  return propertyValues;
};
