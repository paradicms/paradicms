import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {JoinedObject} from "~/models/object/JoinedObject";
import {ObjectFilters} from "~/models/search/ObjectFilters";
import {Image} from "~/models/image/Image";
import {StringFacetFilter} from "~/models/search/StringFacetFilter";
import {UriFacetFilter} from "~/models/search/UriFacetFilter";

export class Objects {
  static filter(kwds: {
    filters: ObjectFilters;
    objects: readonly Object[];
  }): readonly Object[] {
    let {filters, objects} = kwds;

    const filter = (
      key: keyof ObjectFilters,
      objects: readonly Object[]
    ): readonly Object[] => {
      const stringFilters:
        | StringFacetFilter
        | UriFacetFilter
        | null
        | undefined = filters[key];
      if (!stringFilters) {
        return objects;
      }
      const excludeValues = stringFilters.exclude ?? [];
      const includeValues = stringFilters.include ?? [];
      if (excludeValues.length === 0 && includeValues.length === 0) {
        return objects;
      }
      return objects.filter(object => {
        let objectValues: string[] | null | undefined;
        switch (key) {
          case "institutionUris":
            objectValues = [object.institutionUri];
            break;
          default:
            objectValues = object[key as keyof Object] as string[];
            break;
        }
        if (!objectValues) {
          return true;
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

    objects = filter("collectionUris", objects);
    objects = filter("creators", objects);
    objects = filter("culturalContexts", objects);
    objects = filter("extents", objects);
    objects = filter("institutionUris", objects);
    objects = filter("languages", objects);
    objects = filter("materials", objects);
    objects = filter("media", objects);
    objects = filter("publishers", objects);
    objects = filter("spatials", objects);
    objects = filter("subjects", objects);
    objects = filter("techniques", objects);
    objects = filter("temporals", objects);
    objects = filter("types", objects);

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
