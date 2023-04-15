import {Quad} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";
import {DatasetBackedModelSet} from "DatasetBackedModelSet";

export const createPropertyValuesFromQuadObjects = (
  modelSet: DatasetBackedModelSet,
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
