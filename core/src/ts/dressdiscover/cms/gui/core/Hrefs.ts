export class Hrefs {
  static collection(kwds: { collectionUri: string, institutionUri: string }) {
    return Hrefs.institution(kwds.institutionUri) + "/collection/" + encodeURIComponent(encodeURIComponent(kwds.collectionUri));
  }

  static get contact() {
    return "mailto:info@dressdiscover.org";
  }

  static get home() {
    return '/';
  }

  static institution(uri: string) {
    return "/institution/" + encodeURIComponent(encodeURIComponent(uri));
  }

  static object(kwds: { collectionUri: string, institutionUri: string, objectUri: string }) {
    return Hrefs.collection(kwds) + "/object/" + encodeURIComponent(encodeURIComponent(kwds.objectUri));
  }

  static get privacy() {
    return "/privacy";
  }

  static search(text: string) {
    return "/search/" + encodeURIComponent(encodeURIComponent(text));
  }
}
