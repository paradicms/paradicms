import {Institution} from "../Institution";
import {requireDefined} from "../requireDefined";
import {cms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasInstitution extends ModelMixin {
  get institution(): Institution {
    return this.modelSet.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireDefined(
      this.getObjects(cms.institution).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }
}
