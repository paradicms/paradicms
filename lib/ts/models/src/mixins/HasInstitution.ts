import {Institution} from "../Institution";
import {requireDefined} from "../requireDefined";
import {CMS} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasInstitution extends ModelMixin {
  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireDefined(
      this.getObjects(CMS.institution).find(
        (term) => term.termType === "NamedNode"
      )
    ).value;
  }
}
