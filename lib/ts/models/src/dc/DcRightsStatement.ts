import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms, skos } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { RightsStatement } from "../RightsStatement";

export class DcRightsStatement extends Mixin(ResourceBackedModel)
  implements RightsStatement {
  get label(): string {
    return requireNonNull(this.title ?? this.prefLabel);
  }

  override preMemoize(): void {
    super.preMemoize();
    this.prefLabel;
    this.title;
  }

  @Memoize()
  get prefLabel(): string | null {
    return this.findAndMapObject(skos.prefLabel, mapTermToString);
  }

  @Memoize()
  get title(): string | null {
    return this.findAndMapObject(dcterms.title, mapTermToString)
  }
}
