import {encodeFileName} from "@paradicms/next";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static work(kwds: {collectionUri: string; workUri: string}): string {
    return `/${encodeFileName(kwds.collectionUri)}/${encodeFileName(
      kwds.workUri
    )}/`;
  }
}
