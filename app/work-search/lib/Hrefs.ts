import {encodeFileName} from "@paradicms/next";
import {WorksQuery} from "@paradicms/api";
import * as qs from "qs";

export class Hrefs {
  static home(worksQuery?: WorksQuery): string {
    return (
      "/" +
      qs.stringify(
        {query: JSON.stringify(worksQuery)},
        {
          addQueryPrefix: true,
        }
      )
    );
  }

  static work(work: {key: string}): string {
    return `/work/${encodeFileName(work.key)}/`;
  }
}
