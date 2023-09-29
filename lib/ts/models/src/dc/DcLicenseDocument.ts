import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { License } from "../License";
import { ResourceBackedModel } from "../ResourceBackedModel";

export class DcLicenseDocument extends Mixin(ResourceBackedModel)
  implements License {
  get label(): string {
    return this.title;
  }

  override preMemoize(): void {
    super.preMemoize();
    this.title;
  }

  get requiresAttribution(): boolean {
    return true;
  }

  @Memoize()
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }
}
