import {encodeFileName} from "@paradicms/next";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static work(kwds: {workKey: string}): string {
    return `/work/${encodeFileName(kwds.workKey)}/`;
  }
}
