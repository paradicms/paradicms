import {rdfs} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class CmsCommentMixin extends ModelMixin {
  get comment(): string | null {
    return this.findAndMapObject(rdfs.comment, this.mapStringObject);
  }
}
