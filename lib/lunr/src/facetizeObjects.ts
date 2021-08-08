import {
  CollectionValueFacet,
  Facet,
  InstitutionValueFacet,
  Property,
  StringPropertyValueFacet,
  ValueFacetValue,
} from "@paradicms/models";

const incrementValueCount = (
  countsByValue: {[index: string]: number},
  value: string
) => {
  const count = countsByValue[value];
  if (!count) {
    countsByValue[value] = 1;
  } else {
    countsByValue[value] = count + 1;
  }
};

const valuesFromMap = (countsByValue: {
  [index: string]: number;
}): ValueFacetValue<string>[] =>
  Object.keys(countsByValue).map(value => ({
    count: countsByValue[value],
    label: null,
    value,
  }));

export const facetizeObjects = <
  ObjectT extends {
    readonly collectionUris: readonly string[];
    readonly institutionUri: string;
    readonly properties: readonly Property[] | null;
  }
>(kwds: {
  facet: Facet;
  objects: readonly ObjectT[];
}): Facet => {
  const {facet, objects} = kwds;

  switch (facet.type) {
    case "CollectionValue": {
      const concreteFacet: CollectionValueFacet = facet as CollectionValueFacet;
      const countsByValue: {[index: string]: number} = {};
      for (const object of objects) {
        for (const collectionUri of object.collectionUris ?? []) {
          incrementValueCount(countsByValue, collectionUri);
        }
      }
      const result: CollectionValueFacet = {
        ...concreteFacet,
        values: valuesFromMap(countsByValue),
      };
      return result;
    }

    case "InstitutionValue": {
      const concreteFacet: InstitutionValueFacet = facet as InstitutionValueFacet;
      const countsByValue: {[index: string]: number} = {};
      for (const object of objects) {
        incrementValueCount(countsByValue, object.institutionUri);
      }
      const result: InstitutionValueFacet = {
        ...concreteFacet,
        values: valuesFromMap(countsByValue),
      };
      return result;
    }

    case "StringPropertyValue": {
      const concreteFacet: StringPropertyValueFacet = facet as StringPropertyValueFacet;
      let unknownCount: number = 0;
      const countsByValue: {[index: string]: number} = {};
      for (const object of objects) {
        let objectHasProperty = false;
        for (const property of object.properties ?? []) {
          if (property.uri === concreteFacet.propertyUri) {
            incrementValueCount(countsByValue, property.value.toString());
            objectHasProperty = true;
          }
        }
        if (!objectHasProperty) {
          unknownCount++;
        }
      }
      const result: StringPropertyValueFacet = {
        ...concreteFacet,
        unknownCount,
        values: valuesFromMap(countsByValue),
      };
      return result;
    }
  }
};
