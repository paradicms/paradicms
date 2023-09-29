import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { dcterms } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Collection } from "../Collection";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Text } from "../Text";
import { Work } from "../Work";
import { mapTermToText } from "../mapTermToText";
import { DcImagesMixin } from "./DcImagesMixin";

export class DcCollection
  extends Mixin(ResourceBackedModel, DcImagesMixin, SomeImageThumbnailMixin)
  implements Collection {
  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTermToText(this, term)
    );
  }

  get label(): string {
    return this.title;
  }

  override preMemoize(): void {
    super.preMemoize();
    this.preMemoizeImages();
    this.description;
    this.title;
    this.works;
  }

  @Memoize()
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }

  @Memoize()
  get works(): readonly Work[] {
    return this.filterAndMapObjects(dcterms.hasPart, term =>
      term.termType === "NamedNode" ? this.modelSet.workByIri(term.value) : null
    );
  }
}
