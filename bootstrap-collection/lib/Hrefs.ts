import {UrlObject} from "url";
import {encodeFileName} from "@paradicms/base";

interface Href {
  // Adapted from Next's <Link> LinkProps
  readonly as?: string | UrlObject;
  readonly href: string | UrlObject;
}

export class Hrefs {
  static get home(): Href {
    return {href: "/"};
  }

  object(objectUri: string): Href {
    return {
      href: `/object/[objectUri]/`,
      as: `/object/${encodeFileName(objectUri)}/`,
    };
  }
}
