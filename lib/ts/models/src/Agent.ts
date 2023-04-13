import {NamedModel} from "./NamedModel";
import {Mixin} from "ts-mixer";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsNameMixin} from "./CmsNameMixin";
import {CmsPageMixin} from "./CmsPageMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";

export class Agent extends Mixin(
  NamedModel,
  CmsImagesMixin,
  CmsNameMixin,
  CmsPageMixin,
  CmsRelationsMixin
) {
  override toString() {
    return this.name;
  }
}
