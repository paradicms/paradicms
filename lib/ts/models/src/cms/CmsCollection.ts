import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Work} from "../Work";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";
import {CmsNamedModel} from "./CmsNamedModel";
import {dcterms} from "@paradicms/vocabularies";

export class CmsCollection
  extends Mixin(
    CmsNamedModel,
    CmsDescriptionMixin,
    CmsImagesMixin,
    CmsTitleMixin
  )
  implements Collection {
  get label(): string {
    return this.title;
  }

  get works(): readonly Work[] {
    return this.filterAndMapObjects(dcterms.hasPart, term =>
      term.termType === "NamedNode" ? this.modelSet.workByIri(term.value) : null
    );
  }
}
