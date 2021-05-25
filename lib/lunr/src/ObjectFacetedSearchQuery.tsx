import {ObjectFacets, ObjectQuery, PropertyDefinition} from "@paradicms/models";
import * as React from "react";
import {ObjectIndex} from "./ObjectIndex";
import {facetizeObjects, filterObjects} from "@paradicms/model-utils";
import {IndexedObject} from "IndexedObject";

/**
 * Component that encapsulates the logic of searching, filtering, joining, and faceting objects, then calls a render prop with the results.
 */
export const ObjectFacetedSearchQuery: React.FunctionComponent<{
  readonly children: (kwds: {
    readonly objectFacets: ObjectFacets;
    readonly objects: readonly IndexedObject[];
  }) => React.ReactNode;
  readonly objects: readonly IndexedObject[];
  readonly propertyDefinitions: readonly PropertyDefinition[];
  readonly query: ObjectQuery;
}> = ({children, objects, propertyDefinitions, query}) => {
  const index = React.useMemo(
    () => new ObjectIndex(objects, propertyDefinitions),
    [objects, propertyDefinitions]
  );

  const results = React.useMemo(() => {
    if (!index) {
      return null;
    }

    // console.info("query " + JSON.stringify(query));

    const searchedObjects = query.text ? index.search(query.text) : objects;
    const filteredObjects = query.filters
      ? filterObjects({
          filters: query.filters,
          objects: searchedObjects,
        })
      : searchedObjects;

    return {
      objectFacets: facetizeObjects(propertyDefinitions, objects),
      objects: filteredObjects,
    };
  }, [index, query]);

  if (!results) {
    return null;
  }

  return <>{children(results)}</>;
};
