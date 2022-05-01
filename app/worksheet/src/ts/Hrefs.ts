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

  static get userSettings() {
    return "/userSettings";
  }

  static worksheetMark(mark: WorksheetMark) {
    let href = "/" + encodeURIComponent(mark.worksheetStateId.toString()) + "/";
    if (mark.featureSetUri) {
      href += "featureSet/" + encodeURIComponent(mark.featureSetUri) + "/";
      if (mark.featureUri) {
        href += "feature/" + encodeURIComponent(mark.featureUri) + "/";
      }
    }
    href += mark.review ? "review" : "edit";
    return href;
  }

  static get worksheetStart() {
    return this.index;
  }
}
