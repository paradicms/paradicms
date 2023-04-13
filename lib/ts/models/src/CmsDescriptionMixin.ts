import {Memoize} from "typescript-memoize";
import {Text} from "./Text";
import {dcterms} from "@paradicms/vocabularies";
import {ResourceBackedNamedModelMixin} from "./ResourceBackedNamedModelMixin";
import {mapTextObject} from "./mapTextObject";

export abstract class CmsDescriptionMixin extends ResourceBackedNamedModelMixin {
  @Memoize()
  get description(): string | Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTextObject(this, term)
    );
  }
}
