import {encodeFileName} from "@paradicms/next";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static work(kwds: {collectionKey: string; workKey: string}): string {
    return `/${encodeFileName(kwds.collectionKey)}/${encodeFileName(
      kwds.workKey
    )}/`;
  }
}
