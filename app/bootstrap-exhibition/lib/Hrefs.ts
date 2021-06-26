import {encodeFileName} from "@paradicms/base";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static object(objectUri: string): string {
    return `/object/${encodeFileName(objectUri)}/`;
  }
}
