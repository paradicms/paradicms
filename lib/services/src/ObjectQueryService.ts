import {ObjectsQuery, ObjectsQueryResults} from "@paradicms/models";

export interface ObjectQueryService {
  getObjects(query: ObjectsQuery): Promise<ObjectsQueryResults>;
}
