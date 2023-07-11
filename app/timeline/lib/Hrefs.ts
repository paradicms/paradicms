import {encodeFileName} from "@paradicms/next";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static event(kwds: {key: string}): string {
    return `/event/${encodeFileName(kwds.key)}/`;
  }
}
