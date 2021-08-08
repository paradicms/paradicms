import {ObjectQuery, ObjectQueryResults} from "@paradicms/models";

export interface ObjectQueryService {
  getObjects(kwds: {limit: number, offset: number, query: ObjectQuery}): Promise<ObjectQueryResults>;
}
