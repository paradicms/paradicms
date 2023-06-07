import {Mixin} from "ts-mixer";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";
import {CmsNamedModel} from "./CmsNamedModel";

export class CmsPropertyGroup
  extends Mixin(CmsNamedModel, CmsCommentMixin, CmsImagesMixin, CmsLabelMixin)
  implements PropertyGroup {
  get properties(): readonly Property[] {
    return this.modelSet.propertiesByGroupIri(this.iri);
  }
}
