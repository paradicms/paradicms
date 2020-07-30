export class Hrefs {
  static collection(kwds: {
    collectionUri: string;
    institutionUri: string;
    // query?: ObjectQuery;
  }) {
    let href =
      Hrefs.institution(kwds.institutionUri) +
      "/collection/" +
      encodeURIComponent(kwds.collectionUri);
    // if (kwds.query && !_.isEmpty(kwds.query)) {
    //   href += "?" + qs.stringify(kwds.query);
    // }
    return href;
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

  // static search(query: ObjectQuery) {
  //   return "/search?" + qs.stringify(query);
  // }
}
