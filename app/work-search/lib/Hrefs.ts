import {encodeFileName} from "@paradicms/next";
import {WorksQuery} from "@paradicms/services";
import * as qs from "qs";

export class Hrefs {
  static home(workQuery?: WorksQuery): string {
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

  static work(workUri: string): string {
    return `/work/${encodeFileName(workUri)}/`;
  }
}
