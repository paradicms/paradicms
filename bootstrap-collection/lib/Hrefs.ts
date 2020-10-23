import {UrlObject} from "url";
import {encodeFileName} from "@paradicms/base";
import {ObjectQuery} from "@paradicms/models";
import * as qs from "qs";

interface Href {
  // Adapted from Next's <Link> LinkProps
  readonly as?: string | UrlObject;
  readonly href: string | UrlObject;
}

export class Hrefs {
  static collection(objectQuery?: ObjectQuery): Href {
    return {
      href: "/",
      as: `/${qs.stringify(objectQuery, {
        addQueryPrefix: true,
      })}`,
    };
  }

  static get home(): Href {
    return Hrefs.collection();
  }

  static object(objectUri: string): Href {
    return {
      href: `/object/[objectUri]/`,
      as: `/object/${encodeFileName(objectUri)}/`,
    };
  }
}
