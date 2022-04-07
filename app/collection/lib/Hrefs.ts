import {encodeFileName} from "@paradicms/next";
import {WorkQuery} from "@paradicms/services";
import * as qs from "qs";

export class Hrefs {
  static collection(workQuery?: WorkQuery): string {
    return (
      "/" +
      qs.stringify(
        {query: JSON.stringify(workQuery)},
        {
          addQueryPrefix: true,
        }
      )
    );
  }

  static get home(): string {
    return Hrefs.collection();
  }

  static work(workUri: string): string {
    return `/work/${encodeFileName(workUri)}/`;
  }
}
