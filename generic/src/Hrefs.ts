import {ObjectQuery} from "~/models/search/ObjectQuery";
import * as qs from "qs";

export class Hrefs {
  static collection(kwds: {
    collectionUri: string;
    institutionUri: string;
    query?: ObjectQuery;
  }) {
    return (
      Hrefs.institution(kwds.institutionUri) +
      "/collection/" +
      encodeURIComponent(kwds.collectionUri) +
      qs.stringify(kwds, {addQueryPrefix: true})
    );
  }

  static get home() {
    return "/";
  }

  static institution(uri: string) {
    return "/institution/" + encodeURIComponent(uri);
  }

  static object(kwds: {
    collectionUri: string;
    institutionUri: string;
    objectUri: string;
  }) {
    return (
      Hrefs.collection(kwds) + "/object/" + encodeURIComponent(kwds.objectUri)
    );
  }

  static search(query?: ObjectQuery) {
    return "/search" + qs.stringify(query, {addQueryPrefix: true});
  }
}
