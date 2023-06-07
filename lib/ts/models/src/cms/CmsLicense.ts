import {requireNonNull} from "@paradicms/utilities";
import {dc11} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {License} from "../License";
import {CmsNamedModel} from "./CmsNamedModel";

export class CmsLicense extends Mixin(CmsNamedModel) implements License {
  // get identifier(): string {
  //   return requireNonNull(
  //     this.findAndMapObject(dc11.identifier, this.mapStringObject)
  //   );
  // }

  get label(): string {
    return this.title;
  }

  get requiresAttribution(): boolean {
    switch (this.iri) {
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
