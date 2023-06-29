import {requireNonNull} from "@paradicms/utilities";
import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {RightsStatement} from "../RightsStatement";
import {DcNamedModel} from "./DcNamedModel";
import {mapTermToString} from "@paradicms/rdf";

export class DcRightsStatement extends Mixin(DcNamedModel)
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
