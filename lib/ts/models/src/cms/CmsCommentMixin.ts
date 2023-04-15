import {rdfs} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";

export abstract class CmsCommentMixin extends ResourceBackedModelMixin {
  get comment(): string | null {
    return this.findAndMapObject(rdfs.comment, this.mapStringObject);
  }
}
