import {requireNonNull} from "@paradicms/utilities";
import {dcterms, skos} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {RightsStatement} from "../RightsStatement";
import {mapTermToString} from "@paradicms/rdf";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class RightsStatementsDotOrgRightsStatement
  extends Mixin(ResourceBackedModel)
  implements RightsStatement {
  get definition(): string | null {
    return this.findAndMapObject(skos.definition, mapTermToString);
  }

  get description(): string | null {
    return this.findAndMapObject(dcterms.description, mapTermToString);
  }

  // get identifier(): string {
  //   return requireNonNull(
  //     this.findAndMapObject(dcterms.identifier, mapTermToString)
  //   );
  // }

  get label(): string {
    return this.prefLabel;
  }

  get prefLabel(): string {
    return requireNonNull(
      this.findAndMapObject(skos.prefLabel, mapTermToString)
    );
  }
}
