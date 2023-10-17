import {mapTermToString} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {License} from "../License";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class DcLicenseDocument extends Mixin(ResourceBackedModel)
  implements License {
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

  @Memoize()
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }
}
