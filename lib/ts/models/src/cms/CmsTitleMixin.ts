import {requireNonNull} from "@paradicms/utilities";
import {dcterms} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToString} from "@paradicms/rdf";

export abstract class CmsTitleMixin extends ResourceBackedModelMixin {
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, mapTermToString)
    );
  }
}
