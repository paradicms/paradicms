import { requireNonNull } from "@paradicms/utilities";
import { dcterms, skos } from "@paradicms/vocabularies";
import { ResourceBackedNamedModel } from "../ResourceBackedNamedModel";
import { RightsStatement } from "../RightsStatement";

export class CmsRightsStatement extends ResourceBackedNamedModel
  implements RightsStatement {
  get definition(): string | null {
    return this.findAndMapObject(skos.definition, this.mapStringObject);
  }

  get description(): string | null {
    return this.findAndMapObject(dcterms.description, this.mapStringObject);
  }

  get identifier(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.identifier, this.mapStringObject)
    );
  }

  get prefLabel(): string {
    return requireNonNull(
      this.findAndMapObject(skos.prefLabel, this.mapStringObject)
    );
  }

  override toString() {
    return this.prefLabel;
  }
}
