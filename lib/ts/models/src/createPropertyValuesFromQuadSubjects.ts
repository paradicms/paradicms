import {DatasetCore, Quad} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";
import {ModelSet} from "./ModelSet";
import {Property} from "./Property";

export const createPropertyValuesFromQuadSubjects = (kwds: {
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
      term: quad.subject,
      termGraph: quad.graph,
    });
    if (propertyValue) {
      propertyValues.push(propertyValue);
    }
  }
  return propertyValues;
};
