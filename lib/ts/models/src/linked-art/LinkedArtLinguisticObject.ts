import {Mixin} from "ts-mixer";
import {LinkedArtModel} from "./LinkedArtModel";
import {AgentUnion} from "../AgentUnion";
import {License} from "../License";
import {LinkedArtRight} from "./LinkedArtRight";
import {crm} from "@paradicms/vocabularies";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";
import {RightsStatement} from "../RightsStatement";
import {Text} from "../Text";
import {Memoize} from "typescript-memoize";
import {requireNonNull} from "@paradicms/utilities";
import {LiteralAgent} from "../literal/LiteralAgent";
import {Literal} from "@rdfjs/types";

export class LinkedArtLinguisticObject extends Mixin(LinkedArtModel)
  implements Text {
  get contributors(): readonly AgentUnion[] {
    return [];
  }

  get creators(): readonly AgentUnion[] {
    return [];
  }

  get isSubjectTo(): readonly LinkedArtRight[] {
    return this.filterAndMapObjects(crm.P104_is_subject_to, term =>
      mapTermToLinkedArtModel(this, term)
    ).filter(model => model instanceof LinkedArtRight);
  }

  get requiresAttribution() {
    if (this.licenses.length === 0) {
      return true;
    } else if (!this.licenses.some(license => license.requiresAttribution)) {
      // If some license does not require attribution, then don't do attribution
      return false;
    } else {
      return true;
    }
  }

  @Memoize()
  get licenses(): readonly License[] {
    return this.isSubjectTo
      .flatMap(right => right.hasType)
      .flatMap(licenseIri => {
        const license = this.modelSet.licenseByIri(licenseIri.value);
        return license ? [license] : [];
      });
  }

  @Memoize()
  get rightsHolders(): readonly AgentUnion[] {
    const rightsHolders: AgentUnion[] = [];
    for (const right of this.isSubjectTo) {
      for (const acknowledgment of right.isSubjectOf) {
        if (!(acknowledgment instanceof LinkedArtLinguisticObject)) {
          continue;
        }
        rightsHolders.push(new LiteralAgent(acknowledgment.valueLiteral));
      }
    }
    return rightsHolders;
  }

  get rightsStatements(): readonly RightsStatement[] {
    return [];
  }

  get value(): string {
    return this.valueLiteral.value;
  }

  @Memoize()
  get valueLiteral(): Literal {
    return requireNonNull(
      this.findAndMapObject(crm.P190_has_symbolic_content, term =>
        term.termType === "Literal" ? (term as Literal) : null
      )
    );
  }
}
