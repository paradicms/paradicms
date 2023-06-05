import {encodeFileName} from "@paradicms/next";
import {WorksQuery} from "@paradicms/services";
import * as qs from "qs";
import {Work} from "@paradicms/models";

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

  static work(work: Work): string {
    return `/work/${encodeFileName(work.key)}/`;
  }
}
