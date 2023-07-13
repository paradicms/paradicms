import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Work} from "../Work";
import {dcterms} from "@paradicms/vocabularies";
import {Text} from "../Text";
import {mapTermToText} from "../mapTermToText";
import {DcImagesMixin} from "./DcImagesMixin";
import {Memoize} from "typescript-memoize";
import {requireNonNull} from "@paradicms/utilities";
import {mapTermToString} from "@paradicms/rdf";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {ResourceBackedModel} from "../ResourceBackedModel";

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
