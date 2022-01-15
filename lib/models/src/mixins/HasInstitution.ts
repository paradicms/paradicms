import {Institution} from "../Institution";
import {requireDefined} from "../requireDefined";
import {CMS} from "../vocabularies";
import {Dataset} from "../Dataset";
import {NamedNode, Term} from "n3";

export abstract class HasInstitution {
  protected abstract readonly dataset: Dataset;
  protected abstract propertyObjects(property: NamedNode): readonly Term[];

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
