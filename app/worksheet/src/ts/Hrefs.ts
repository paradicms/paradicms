import {WorksheetMark} from "~/models/WorksheetMark";

export class Hrefs {
  static get gettingStarted() {
    return "/GettingStartedWithDressDiscover.pdf";
  }

  static get index() {
    return "/";
  }

  static get login() {
    return "/login";
  }

  static get loginCallback() {
    return "/loginCallback";
  }

  static get logout() {
    return "/logout";
  }

  static get logoutCallback() {
    return "/logoutCallback";
  }

  static get privacy() {
    return "/privacy";
  }

  static get userSettings() {
    return "/userSettings";
  }

  static worksheetMark(mark: WorksheetMark) {
    let href =
      "/worksheet/state/" +
      encodeURIComponent(mark.worksheetStateId.toString()) +
      "/";
    if (mark.featureSetUri) {
      href +=
        "feature_set/" + encodeURIComponent(mark.featureSetUri.toString()) + "/";
      if (mark.featureUri) {
        href +=
          "feature/" + encodeURIComponent(mark.featureUri.toString()) + "/";
      }
    }
    href += mark.review ? "review" : "edit";
    return href;
  }

  static get worksheetStart() {
    return this.index;
  }
}
