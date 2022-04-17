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

  static worksheetState(mark: WorksheetMark) {
    let href =
      "/worksheet/state/" +
      encodeURIComponent(mark.worksheetStateId.toString()) +
      "/";
    if (mark.featureSetId) {
      href +=
        "feature_set/" + encodeURIComponent(mark.featureSetId.toString()) + "/";
      if (mark.featureId) {
        href +=
          "feature/" + encodeURIComponent(mark.featureId.toString()) + "/";
      }
    }
    href += mark.review ? "review" : "edit";
    return href;
  }
}
