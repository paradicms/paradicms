import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms, skos } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { RightsStatement } from "../RightsStatement";

export class RightsStatementsDotOrgRightsStatement
  extends Mixin(ResourceBackedModel)
  implements RightsStatement {
  @Memoize()
  get definition(): string | null {
    return this.findAndMapObject(skos.definition, mapTermToString);
  }

  @Memoize()
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

  @Memoize()
  get prefLabel(): string {
    return requireNonNull(
      this.findAndMapObject(skos.prefLabel, mapTermToString)
    );
  }

  override preMemoize(): void {
    super.preMemoize();
    this.definition;
    this.description;
    this.prefLabel;
  }
}
