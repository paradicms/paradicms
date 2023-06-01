import {encodeFileName} from "@paradicms/next";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static work(kwds: {collectionIri: string; workIri: string}): string {
    return `/${encodeFileName(kwds.collectionIri)}/${encodeFileName(
      kwds.workIri
    )}/`;
  }
}
