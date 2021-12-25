import {WorkQuery} from "@paradicms/services";
import * as qs from "qs";
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
          works(query?: WorkQuery): string {
            return `${collectionHref}${qs.stringify(query, {
              addQueryPrefix: true,
            })}`;
          },
        };
      },
      home: institutionHref,
      work(workUri: string): string {
        return `${institutionHref}/work/${encodeFileName(workUri)}/`;
      },
    };
  }

  static search(query?: WorkQuery): string {
    const href = "/search";
    if (!query) {
      return href;
    }
    return (
      href +
      qs.stringify({query: JSON.stringify(query)}, {addQueryPrefix: true})
    );
  }
}
