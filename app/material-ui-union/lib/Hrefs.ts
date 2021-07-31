import {ObjectsQuery} from "@paradicms/models";
import * as qs from "qs";
import _ from "lodash";
import {encodeFileName} from "@paradicms/next";

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
          objects(query?: ObjectsQuery): string {
            return `${collectionHref}${qs.stringify(query, {
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

  static search(query?: ObjectsQuery): string {
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
