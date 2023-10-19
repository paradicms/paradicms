import {encodeFileName} from "@paradicms/next";
import {NamedNode} from "@rdfjs/types";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static event(kwds: {iri: NamedNode}): string {
    return `/event/${encodeFileName(kwds.iri.value)}/`;
  }
}
