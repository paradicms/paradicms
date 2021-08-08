import {encodeFileName} from "@paradicms/next";
import {ObjectQuery} from "@paradicms/models";
import * as qs from "qs";

export class Hrefs {
  static collection(objectQuery?: ObjectQuery): string {
    return (
      "/" +
      qs.stringify(
        {query: JSON.stringify(objectQuery)},
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
