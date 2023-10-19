import {WorksQuery} from "@paradicms/api";
import {encodeFileName} from "@paradicms/next";
import {NamedNode} from "@rdfjs/types";
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

  static work(work: {iri: NamedNode}): string {
    return `/work/${encodeFileName(work.iri.value)}/`;
  }
}
