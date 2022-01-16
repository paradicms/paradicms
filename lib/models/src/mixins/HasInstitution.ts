import {Institution} from "../Institution";
import {requireDefined} from "../requireDefined";
import {CMS} from "../vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasInstitution extends ModelMixin {
  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireDefined(
      this.propertyObjects(CMS.institution).find(
        term => term.termType === "NamedNode"
      )
    ).value;
  }
}
