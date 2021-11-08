import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Agent} from "./Agent";
import {Dataset} from "./Dataset";
import {BlankNode, NamedNode} from "n3";
import {Memoize} from "typescript-memoize";

export class Rights extends Model {
  @Memoize()
  get creator(): Agent | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.agentByUri(uri),
      DCTERMS.creator
    );
  }

  @Memoize()
  get holder(): string | null {
    return this.optionalString(DCTERMS.rightsHolder);
  }

  @Memoize()
  get license(): License | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.licenseByUri(uri),
      DCTERMS.license
    );
  }

  static optional(kwds: {
    dataset: Dataset;
    node: BlankNode | NamedNode;
  }): Rights | null {
    const rights = new Rights(kwds);

    if (rights.creator || rights.holder || rights.license || rights.statement) {
      return rights;
    } else {
      return null;
    }
  }

  @Memoize()
  get statement(): RightsStatement | string | null {
    return this.optionalModelOrString(
      uri => this.dataset.rightsStatementByUri(uri),
      DCTERMS.rights
    );
  }
}
