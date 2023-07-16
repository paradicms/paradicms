import {crm, rdfs} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {mapTermToString} from "@paradicms/rdf";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";
import {NamedNode} from "@rdfjs/types";

export class LinkedArtModel extends ResourceBackedModel {
  @Memoize()
  get label(): string | null {
    return this.findAndMapObject(rdfs.label, mapTermToString);
  }

  @Memoize()
  get hasType(): readonly NamedNode[] {
    return this.filterAndMapObjects(crm.P2_has_type, term =>
      term.termType === "NamedNode" ? (term as NamedNode) : null
    );
  }

  @Memoize()
  get isReferredToBy(): readonly LinkedArtModel[] {
    return this.filterAndMapObjects(crm.P67i_is_referred_to_by, term =>
      mapTermToLinkedArtModel(this, term)
    );
  }

  @Memoize()
  get isSubjectOf(): readonly LinkedArtModel[] {
    return this.filterAndMapObjects(crm.P129i_is_subject_of, term =>
      mapTermToLinkedArtModel(this, term)
    );
  }
}
