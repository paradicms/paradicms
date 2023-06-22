import {requireNonNull} from "@paradicms/utilities";
import {dcterms, skos} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {RightsStatement} from "../RightsStatement";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";

export class RightsStatementsDotOrgRightsStatement
  extends Mixin(ResourceBackedNamedModel)
  implements RightsStatement {
  get definition(): string | null {
    return this.findAndMapObject(skos.definition, this.mapStringObject);
  }

  get description(): string | null {
    return this.findAndMapObject(dcterms.description, this.mapStringObject);
  }

  // get identifier(): string {
  //   return requireNonNull(
  //     this.findAndMapObject(dcterms.identifier, this.mapStringObject)
  //   );
  // }

  get label(): string {
    return this.prefLabel;
  }

  get prefLabel(): string {
    return requireNonNull(
      this.findAndMapObject(skos.prefLabel, this.mapStringObject)
    );
  }
}
