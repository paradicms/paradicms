import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {dcterms} from "@paradicms/vocabularies";
import {NamedModelMixin} from "./NamedModelMixin";
import {mapTextObject} from "../mapTextObject";

export abstract class HasAbstract extends NamedModelMixin {
  @Memoize()
  get abstract(): string | Text | null {
    return this.findAndMapObject(dcterms.abstract, term =>
      mapTextObject(this, term)
    );
  }
}
