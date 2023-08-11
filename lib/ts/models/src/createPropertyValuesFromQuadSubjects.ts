import {DatasetCore, Quad} from "@rdfjs/types";
import {createPropertyValueFromTerm} from "./createPropertyValueFromTerm";
import {ModelSet} from "./ModelSet";
import {Property} from "./Property";
import {PropertyValueUnion} from "./PropertyValueUnion";

export const createPropertyValuesFromQuadSubjects = (kwds: {
  dataset: DatasetCore;
  modelSet: ModelSet;
  property: Property;
  quads: readonly Quad[];
}): readonly PropertyValueUnion[] => {
  const {dataset, modelSet, property, quads} = kwds;
  const propertyValues: PropertyValueUnion[] = [];
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
