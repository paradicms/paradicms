import {Institution} from "../Institution";
import {cms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";
import {requireDefined} from "@paradicms/rdf";

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
