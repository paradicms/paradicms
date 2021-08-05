import {
  GetObjectsResult,
  ObjectQueryService,
} from "~/services/ObjectQueryService";
import {Query} from "~/models/Query";
import * as React from "react";

class MissingObjectQueryService implements ObjectQueryService {
  getObjects(query: Query): Promise<GetObjectsResult> {
    return Promise.reject("not implemented");
  }
}

export const ObjectQueryServiceContext =
  React.createContext<ObjectQueryService>(new MissingObjectQueryService());
