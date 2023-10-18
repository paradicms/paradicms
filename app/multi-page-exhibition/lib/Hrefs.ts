import {encodeFileName} from "@paradicms/next";
import {NamedNode} from "@rdfjs/types";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static work(kwds: {iri: NamedNode}): string {
    return `/work/${encodeFileName(kwds.iri.value)}/`;
  }
}
