import {requireNonNull} from "@paradicms/utilities";
import {dc11} from "@paradicms/vocabularies";
import {License} from "../License";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";

export class CmsLicense extends ResourceBackedNamedModel implements License {
  get identifier(): string {
    return requireNonNull(
      this.findAndMapObject(dc11.identifier, this.mapStringObject)
    );
  }

  get label(): string {
    return this.title;
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
}
