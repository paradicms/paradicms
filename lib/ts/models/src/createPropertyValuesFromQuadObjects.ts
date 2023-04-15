import {Quad} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";
import {ModelSet} from "./ModelSet";
import {Dataset} from "@rdfjs/types";

export const createPropertyValuesFromQuadObjects = (kwds: {
  dataset: Dataset;
  modelSet: ModelSet;
  quads: readonly Quad[];
}): readonly PropertyValue[] => {
  const {dataset, modelSet, quads} = kwds;
  const propertyValues: PropertyValue[] = [];
  for (const quad of quads) {
    const propertyValue = createPropertyValueFromTerm({
      dataset,
      modelSet,
      term: quad.object,
      termGraph: quad.graph,
    });
    if (propertyValue) {
      propertyValues.push(propertyValue);
    }
  }
  return propertyValues;
};
