import {ObjectsQuery, ObjectsQueryResults} from "@paradicms/models";

export interface ObjectQueryService {
  getObjects(kwds: {limit: number, offset: number, query: ObjectsQuery}): Promise<ObjectsQueryResults>;
}
