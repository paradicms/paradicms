import {Mixin} from "ts-mixer";
import {Property} from "./Property";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {PropertyGroup} from "./PropertyGroup";
import {ResourceBackedNamedModel} from "./ResourceBackedNamedModel";

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
