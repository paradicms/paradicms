import {Quad} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";
import {Dataset} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";

export const createPropertyValuesFromQuadSubjects = (kwds: {
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
      term: quad.subject,
      termGraph: quad.graph,
    });
    if (propertyValue) {
      propertyValues.push(propertyValue);
    }
  }
  return propertyValues;
};
