import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";
import {CmsNamedModel} from "./CmsNamedModel";

export class CmsPropertyGroup
  extends Mixin(CmsNamedModel, CmsCommentMixin, CmsImagesMixin, CmsLabelMixin)
  implements PropertyGroup {
  @Memoize()
  get properties(): readonly Property[] {
    return this.filterAndMapObjects(dcterms.hasPart, term =>
      term.termType === "NamedNode"
        ? this.modelSet.propertyByIri(term.value)
        : null
    );
  }
}
