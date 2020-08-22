import {ObjectQuery} from "@paradicms/models";
import * as qs from "qs";
import _ from "lodash";
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

  static institution(institutionUri: string) {
    const institutionHref = {
      href: "/institution/[institutionUri]",
      as: `/institution/${encodeFileName(institutionUri)}`,
    };
    return {
      collection(collectionUri: string) {
        const collectionHref = {
          href: `${institutionHref.href}/collection/[collectionUri]`,
          as: `${institutionHref.as}/collection/${encodeFileName(
            collectionUri
          )}/`,
        };
        return {
          get home() {
            return collectionHref;
          },
          objects(objectQuery?: ObjectQuery): Href {
            return {
              href: `${collectionHref.href}`,
              as: `${collectionHref.as}${qs.stringify(objectQuery, {
                addQueryPrefix: true,
              })}`,
            };
          },
        };
      },
      home: institutionHref,
      object(objectUri: string): Href {
        return {
          href: `${institutionHref.href}/object/[objectUri]`,
          as: `${institutionHref.as}/object/${encodeFileName(objectUri)}`,
        };
      },
    };
  }

  static search(query?: ObjectQuery): Href {
    const href = "/search";
    if (_.isEmpty(query)) {
      return {href};
    }
    return {
      href:
        href +
        qs.stringify({query: JSON.stringify(query)}, {addQueryPrefix: true}),
    };
  }
}
