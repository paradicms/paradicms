export class Hrefs {
  static collection(kwds: { collectionUri: string, institutionUri: string }) {
    return Hrefs.institution(kwds.institutionUri) + "/collection/" + encodeURIComponent(encodeURIComponent(kwds.collectionUri));
  }

  static get contact() {
    return "mailto:info@paradicms.org";
  }

  static get home() {
    return '/';
  }

  static institution(uri: string) {
    return "/institution/" + encodeURIComponent(encodeURIComponent(uri));
  }

  static login(returnTo?: string) {
    if (!returnTo) {
      returnTo = window.location.href;
    } else if (returnTo.startsWith("/")) {
      returnTo = window.location.protocol + "://" + window.location.host + returnTo;
    }
    return "/api/auth0/login?returnTo=" + encodeURIComponent(encodeURIComponent(returnTo));
  }

  static get loginCallback() {
    return "/loginCallback";
  }

  static get logout() {
    return "/api/auth0/logout?returnTo=" + encodeURIComponent(encodeURIComponent(window.location.protocol + "://" + window.location.host + "/"));
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
