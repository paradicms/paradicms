import {encodeFileName} from "@paradicms/next";
import qs from "qs";
import {WorksheetMark} from "~/models/WorksheetMark";
import {WorksheetMode} from "~/models/WorksheetMode";

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
    let href = "/";
    if (mark.featureSetIri) {
      href += "featureSet/" + encodeFileName(mark.featureSetIri) + "/";
      if (mark.featureIri) {
        href += "feature/" + encodeFileName(mark.featureIri) + "/";
      }
    }
    href += mark.review ? "review" : "edit";
    return (
      href +
      qs.stringify(
        {
          mode: mark.mode !== WorksheetMode.BEGINNER ? mark.mode : undefined,
          id: mark.worksheetStateId,
        },
        {addQueryPrefix: true}
      )
    );
  }

  static get worksheetStart() {
    return this.index;
  }
}
