import {requireNonNull} from "@paradicms/utilities";
import {cms, rdf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {CmsModel} from "./CmsModel";
import {textFactories} from "../textFactories";

export class CmsText extends Mixin(CmsModel, CmsRightsMixin) {
  override toString(): string {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, this.mapStringObject)
    );
  }
}

textFactories.register(cms.Text, CmsText);
