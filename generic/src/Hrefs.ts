import {ObjectQuery} from "~/models/ObjectQuery";
import * as qs from "qs";
import sanitize from "sanitize-filename";
import _ from "lodash";

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
          objects(objectQuery?: ObjectQuery) {
            return `${collectionHref}object/${qs.stringify(objectQuery, {
              addQueryPrefix: true,
            })}`;
          },
        };
      },
      object(objectUri: UriParameter) {
        return `${institutionHref}object/${encodeUriParameter(objectUri)}`;
      },
      home: institutionHref,
    };
  }

  static search(query?: ObjectQuery) {
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
