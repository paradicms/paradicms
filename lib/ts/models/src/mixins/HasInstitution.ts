import {Institution} from "../Institution";
import {cms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";
import {requireNonNull} from "@paradicms/utilities";

export abstract class HasInstitution extends ModelMixin {
  get institution(): Institution {
    return this.modelSet.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireNonNull(
      this.findAndMapObject(cms.institution, term =>
        term.termType === "NamedNode" ? term.value : null
      )
    );
  }
}
