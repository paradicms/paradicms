import {ObjectQuery} from "~/models/search/ObjectQuery";
import * as qs from "qs";
import sanitize from "sanitize-filename";

interface UriParameter {
  uri: string;
  encoded?: string;
}

export class Hrefs {
  static get home() {
    return "/";
  }

  static institution(institutionUri: UriParameter) {
    const encodeUriParameter = (uriParameter: UriParameter) =>
      uriParameter.encoded ? uriParameter.uri : sanitize(uriParameter.uri);

    const institutionHref = `${Hrefs.home}institution/${encodeUriParameter(
      institutionUri
    )}/`;
    return {
      collection(collectionUri: UriParameter) {
        const collectionHref = `${institutionHref}collection/${encodeUriParameter(
          collectionUri
        )}/`;
        return {
          get home() {
            return this.objects();
          },
          object(objectUri: UriParameter) {
            return `${collectionHref}object/${encodeUriParameter(objectUri)}`;
          },
          objects(objectQuery?: ObjectQuery) {
            return `${collectionHref}object/${qs.stringify(objectQuery, {
              addQueryPrefix: true,
            })}`;
          },
        };
      },
      home: institutionHref,
    };
  }

  static search(query?: ObjectQuery) {
    return "/search" + qs.stringify(query, {addQueryPrefix: true});
  }
}
