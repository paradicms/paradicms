import {configuration} from "@paradicms/vocabularies";
import {Configuration} from "./Configuration";

export class AppConfiguration extends Configuration {
  get stylesheetHref(): string | null {
    return this.findAndMapObject(configuration.stylesheetHref, term => term.termType === "Literal" ? term.value : null);
  }
}
