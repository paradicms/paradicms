import {Mixin} from "ts-mixer";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";

export class CmsPropertyGroup
  extends Mixin(
    ResourceBackedNamedModel,
    CmsCommentMixin,
    CmsImagesMixin,
    CmsLabelMixin
  )
  implements PropertyGroup {
  get properties(): readonly Property[] {
    return this.modelSet.propertiesByGroupUri(this.uri);
  }
}
