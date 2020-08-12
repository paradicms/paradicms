import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {JoinedObject} from "~/models/object/JoinedObject";
import {ObjectFilters} from "~/models/search/ObjectFilters";
import {Image} from "~/models/image/Image";
import {StringFilter} from "~/models/search/StringFilter";
import {PropertyDefinition} from "~/models/property/PropertyDefinition";
import {ObjectPropertyFacet} from "~/models/search/ObjectPropertyFacet";
import {PropertyValue} from "~/models/property/PropertyValue";
import {ObjectFacets} from "~/models/search/ObjectFacets";

export class Objects {
  static facetize(
    propertyDefinitions: readonly PropertyDefinition[],
    objects: readonly Object[]
  ): ObjectFacets {
    const propertyFacets: ObjectPropertyFacet[] = [];
    const objectsWithProperties = objects.filter(object => object.properties);
    for (const propertyDefinition of propertyDefinitions) {
      if (!propertyDefinition.faceted) {
        continue;
      }
      const facetObjects: Object[] = [];
      const facetValues: PropertyValue[] = [];
      for (const object of objectsWithProperties) {
        let includeObject = false;
        for (const property of object.properties!) {
          if (property.key === propertyDefinition.key) {
            facetValues.push(property.value);
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
          values: facetValues,
        });
      }
    }
    return {properties: propertyFacets};
  }

  static filter(kwds: {
    filters: ObjectFilters;
    objects: readonly Object[];
  }): readonly Object[] {
    let {filters, objects} = kwds;

    const filterStrings = (kwds: {
      filter: StringFilter | null | undefined;
      getObjectValues: (object: Object) => string[] | null | undefined;
      objects: readonly Object[];
    }): readonly Object[] => {
      const {filter, getObjectValues, objects} = kwds;
      if (!filter) {
        return objects;
      }
      const excludeValues = filter.exclude ?? [];
      const includeValues = filter.include ?? [];
      if (excludeValues.length === 0 && includeValues.length === 0) {
        return objects;
      }
      return objects.filter(object => {
        let objectValues = getObjectValues(object);
        if (!objectValues) {
          objectValues = [];
        }

        if (excludeValues.length > 0) {
          // If an object has any value that is excluded, then exclude the object
          for (const objectValue of objectValues) {
            if (
              excludeValues.some(excludeValue => excludeValue === objectValue)
            ) {
              return false;
            }
          }
        }

        if (includeValues.length > 0) {
          // If the object has any value that is included, then include the object
          // Conversely, if any values are included and an object doesn't have one of them, exclude the object.
          let include = false;
          for (const objectValue of objectValues) {
            if (
              includeValues.some(includeValue => includeValue === objectValue)
            ) {
              include = true;
              break;
            }
          }
          if (!include) {
            return false;
          }
        }

        return true;
      });
    };

    objects = filterStrings({
      filter: filters.collectionUris,
      getObjectValues: object => object.collectionUris,
      objects,
    });

    objects = filterStrings({
      filter: filters.institutionUris,
      getObjectValues: object => [object.institutionUri],
      objects,
    });

    if (filters.properties) {
      for (const propertyFilter of filters.properties) {
        objects = filterStrings({
          filter: propertyFilter,
          getObjectValues: object =>
            (object.properties ?? [])
              .filter(property => property.key === propertyFilter.key)
              .map(property => property.value),
          objects,
        });
      }
    }

    return objects;
  }

  static join(kwds: {
    collectionsByUri: {[index: string]: Collection};
    imagesByObjectUri: {[index: string]: readonly Image[]};
    institutionsByUri: {[index: string]: Institution};
    objects: readonly Object[];
  }): readonly JoinedObject[] {
    const {
      collectionsByUri,
      imagesByObjectUri,
      institutionsByUri,
      objects,
    } = kwds;
    return objects.map(object => {
      const collections: Collection[] = [];
      for (const collectionUri of object.collectionUris) {
        const collection = collectionsByUri[collectionUri];
        if (collection) {
          collections.push(collection);
        }
      }
      if (collections.length === 0) {
        throw new EvalError(
          "unable to resolve any collection URIs: " +
            object.collectionUris.join(" ")
        );
      }

      const images = imagesByObjectUri[object.uri];

      const institution = institutionsByUri[object.institutionUri];
      if (!institution) {
        throw new EvalError(
          "unable to resolve institution " + object.institutionUri
        );
      }

      return {
        collections,
        images: images ?? [],
        institution,
        ...object,
      };
    });
  }
}
