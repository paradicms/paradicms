import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Work} from "../Work";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";
import {CmsNamedModel} from "./CmsNamedModel";
import {dcterms} from "@paradicms/vocabularies";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";

export class CmsCollection
  extends Mixin(
    CmsNamedModel,
    CmsDescriptionMixin,
    FoafImagesMixin,
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
