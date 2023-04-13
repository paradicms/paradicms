import {NamedModel} from "./NamedModel";
import {Mixin} from "ts-mixer";
import {Property} from "./Property";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";

export class PropertyGroup extends Mixin(
  NamedModel,
  CmsCommentMixin,
  CmsImagesMixin,
  CmsLabelMixin
) {
  get properties(): readonly Property[] {
    return this.modelSet.propertiesByGroupUri(this.uri);
  }
}
