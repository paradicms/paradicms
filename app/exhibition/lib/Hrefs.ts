import {encodeFileName} from "@paradicms/next";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static work(workUri: string): string {
    return `/work/${encodeFileName(workUri)}/`;
  }
}
