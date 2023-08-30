import {crm} from "@paradicms/vocabularies";
import invariant from "ts-invariant";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Agent} from "../Agent";
import {License} from "../License";
import {RightsStatement} from "../RightsStatement";
import {Text} from "../Text";
import {LiteralAgent} from "../literal/LiteralAgent";
import {LinkedArtHasSymbolicContentMixin} from "./LinkedArtHasSymbolicContentMixin";
import {LinkedArtModel} from "./LinkedArtModel";
import {LinkedArtRight} from "./LinkedArtRight";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";

export class LinkedArtLinguisticObject
  extends Mixin(LinkedArtModel, LinkedArtHasSymbolicContentMixin)
  implements Text {
  get contributors(): readonly Agent[] {
    return [];
  }

  get creators(): readonly Agent[] {
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
  get rightsHolders(): readonly Agent[] {
    const rightsHolders: Agent[] = [];
    for (const right of this.isSubjectTo) {
      for (const acknowledgment of right.isSubjectOf) {
        if (!(acknowledgment instanceof LinkedArtLinguisticObject)) {
          continue;
        }
        invariant(acknowledgment.hasSymbolicContent.length > 0);
        rightsHolders.push(
          new LiteralAgent({literal: acknowledgment.hasSymbolicContent[0]})
        );
      }
    }
    return rightsHolders;
  }

  get rightsStatements(): readonly RightsStatement[] {
    return [];
  }

  get value(): string {
    invariant(this.hasSymbolicContent.length > 0);
    return this.hasSymbolicContent[0].value;
  }
}
