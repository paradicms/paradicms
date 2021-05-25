import {
  ObjectFacets,
  ObjectPropertyFacet,
  Property,
  PropertyDefinition,
} from "@paradicms/models";

interface FacetizableObject {
  properties: readonly Property[] | null;
}

export const facetizeObjects = (
  propertyDefinitions: readonly PropertyDefinition[],
  objects: readonly FacetizableObject[]
): ObjectFacets => {
  const propertyFacets: ObjectPropertyFacet[] = [];
  const objectsWithProperties = objects.filter(object => object.properties);
  for (const propertyDefinition of propertyDefinitions) {
    if (!propertyDefinition.faceted) {
      continue;
    }
    const facetObjects: FacetizableObject[] = [];
    const facetValues: {[index: string]: number} = {};
    for (const object of objectsWithProperties) {
      let includeObject = false;
      for (const property of object.properties!) {
        if (property.uri === propertyDefinition.uri) {
          const count = facetValues[property.value.toString()];
          if (!count) {
            facetValues[property.value.toString()] = 1;
          } else {
            facetValues[property.value.toString()] = count + 1;
          }
          includeObject = true;
        }
      }
      if (includeObject) {
        facetObjects.push(object);
      }
    }
    if (facetObjects.length > 0) {
      propertyFacets.push({
        definition: propertyDefinition,
        objects: facetObjects,
        values: Object.keys(facetValues).map(facetValue => ({
          count: facetValues[facetValue],
          label: null,
          value: facetValue,
        })),
      });
    }
  }
  return {properties: propertyFacets};
};
