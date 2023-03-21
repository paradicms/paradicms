import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {dcterms} from "@paradicms/vocabularies";
import {NamedModelMixin} from "./NamedModelMixin";
import {mapTextObject} from "../mapTextObject";

export abstract class HasDescription extends NamedModelMixin {
  @Memoize()
  get description(): string | Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTextObject(this, term)
    );
  }
}
