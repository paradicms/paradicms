import {requireNonNull} from "@paradicms/utilities";
import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {RightsStatement} from "../RightsStatement";
import {mapTermToString} from "@paradicms/rdf";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class DcRightsStatement extends Mixin(ResourceBackedModel)
  implements RightsStatement {
  get label(): string {
    return this.title;
  }

  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }
}
