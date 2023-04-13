import {Mixin} from "ts-mixer";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsNameMixin} from "./CmsNameMixin";
import {CmsPageMixin} from "./CmsPageMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {ResourceBackedNamedModel} from "./ResourceBackedNamedModel";
import {Agent} from "Agent";

export class CmsAgent extends Mixin(
  ResourceBackedNamedModel,
  CmsImagesMixin,
  CmsNameMixin,
  CmsPageMixin,
  CmsRelationsMixin
) implements Agent {
  override toString() {
    return this.name;
  }
}
