import {ObjectQuery} from "@paradicms/models";
import * as qs from "qs";
import _ from "lodash";
import {encodeFileName} from "@paradicms/base";

export class Hrefs {
  static get home(): string {
    return "/";
  }

  static institution(institutionUri: string) {
    const institutionHref = `/institution/${encodeFileName(institutionUri)}`;
    return {
      collection(collectionUri: string) {
        const collectionHref = `${institutionHref}/collection/${encodeFileName(
          collectionUri
        )}/`;
        return {
          get home(): string {
            return collectionHref;
          },
          objects(objectQuery?: ObjectQuery): string {
            return `${collectionHref}${qs.stringify(objectQuery, {
              addQueryPrefix: true,
            })}`;
          },
        };
      },
      home: institutionHref,
      object(objectUri: string): string {
        return `${institutionHref}/object/${encodeFileName(objectUri)}/`;
      },
    };
  }

  static search(query?: ObjectQuery): string {
    const href = "/search";
    if (_.isEmpty(query)) {
      return href;
    }
    return (
      href +
      qs.stringify({query: JSON.stringify(query)}, {addQueryPrefix: true})
    );
  }
}
