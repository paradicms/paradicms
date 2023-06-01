import {encodeFileName} from "@paradicms/next";
import {WorksQuery} from "@paradicms/services";
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

  static work(workIri: string): string {
    return `/work/${encodeFileName(workIri)}/`;
  }
}
