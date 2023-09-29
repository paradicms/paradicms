import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { RightsStatement } from "../RightsStatement";

export class DcRightsStatement extends Mixin(ResourceBackedModel)
  implements RightsStatement {
  get label(): string {
    return this.title;
  }

  override preMemoize(): void {
    super.preMemoize();
    this.title;
  }

  @Memoize()
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }
}
