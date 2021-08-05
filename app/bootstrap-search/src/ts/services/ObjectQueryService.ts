import {Object} from "~/models/Object";
import {Query} from "~/models/Query";

export interface GetObjectsResult {
  readonly objects: Object[];
  readonly totalObjectsCount: number;
}

export interface ObjectQueryService {
  getObjects(query: Query): Promise<GetObjectsResult>;
}
