import {NamedModel} from "./NamedModel";
import {dc11} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class License extends NamedModel {
  get identifier(): string {
    return requireNonNull(
      this.findAndMapObject(dc11.identifier, this.mapStringObject
    );
  }

  get requiresAttribution(): boolean {
    switch (this.uri) {
      case "http://creativecommons.org/publicdomain/mark/1.0/":
      case "http://creativecommons.org/publicdomain/zero/1.0/":
        return false;
      default:
        return true;
    }
  }

  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dc11.title, this.mapStringObject)
    );
  }

  override toString() {
    return this.title;
  }
}
