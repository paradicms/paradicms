import {encodeFileName} from "@paradicms/next";
import {ObjectsQuery} from "@paradicms/models";
import * as qs from "qs";

export class Hrefs {
  static collection(objectsQuery?: ObjectsQuery): string {
    return (
      "/" +
      qs.stringify(
        {query: JSON.stringify(objectsQuery)},
        {
          addQueryPrefix: true,
        },
      )
    );
  }

  static get home(): string {
    return Hrefs.collection();
  }

  static object(objectUri: string): string {
    return `/object/${encodeFileName(objectUri)}/`;
  }
}
