import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {dcterms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasAbstract extends ModelMixin {
  @Memoize()
  get abstract(): string | Text | null {
    return this.findAndMapObject(dcterms.abstract, this.mapTextObject);
  }
}
