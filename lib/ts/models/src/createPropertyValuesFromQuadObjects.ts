import {DatasetCore, Quad} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {Property} from "./Property";
import {PropertyValue} from "./PropertyValue";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";

export const createPropertyValuesFromQuadObjects = (kwds: {
  dataset: DatasetCore;
  modelSet: ModelSet;
  property: Property;
  quads: readonly Quad[];
}): readonly PropertyValue[] => {
  const {dataset, modelSet, property, quads} = kwds;
  const propertyValues: PropertyValue[] = [];
  for (const quad of quads) {
    const propertyValue = createPropertyValueFromTerm({
      dataset,
      modelSet,
      property,
      term: quad.object,
      termGraph: quad.graph,
    });
    if (propertyValue) {
      propertyValues.push(propertyValue);
    }
  }
  return propertyValues;
};
