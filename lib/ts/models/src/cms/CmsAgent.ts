import {Mixin} from "ts-mixer";
import {Agent} from "../Agent";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsNameMixin} from "./CmsNameMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";

export class CmsAgent
  extends Mixin(
    ResourceBackedNamedModel,
    CmsImagesMixin,
    CmsNameMixin,
    CmsRelationsMixin
  )
  implements Agent {
  get label(): string {
    return this.name;
  }
}
