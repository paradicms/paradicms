import {dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";
import {CmsNamedModel} from "./CmsNamedModel";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";

export class CmsPropertyGroup
  extends Mixin(CmsNamedModel, CmsCommentMixin, FoafImagesMixin, CmsLabelMixin)
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
