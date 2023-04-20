import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {ResourceBackedNamedModelMixin} from "../ResourceBackedNamedModelMixin";
import {Text} from "../Text";
import {mapCmsTextObject} from "./mapCmsTextObject";

export abstract class CmsDescriptionMixin extends ResourceBackedNamedModelMixin {
  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapCmsTextObject(this, term)
    );
  }
}
