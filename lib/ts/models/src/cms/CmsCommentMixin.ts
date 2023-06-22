import {rdfs} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {Text} from "../Text";
import {mapTermToText} from "../mapTermToText";

export abstract class CmsCommentMixin extends ResourceBackedModelMixin {
  get comment(): Text | null {
    return this.findAndMapObject(rdfs.comment, term =>
      mapTermToText(this, term)
    );
  }
}
