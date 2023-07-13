import {requireNonNull} from "@paradicms/utilities";
import {Mixin} from "ts-mixer";
import {License} from "../License";
import {mapTermToString} from "@paradicms/rdf";
import {dcterms} from "@paradicms/vocabularies";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class DcLicenseDocument extends Mixin(ResourceBackedModel)
  implements License {
  get label(): string {
    return this.title;
  }

  get requiresAttribution(): boolean {
    return true;
  }

  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }
}
