import {LinkedArtModelMixin} from "./LinkedArtModelMixin";
import {Literal} from "@rdfjs/types";
import {crm} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";

export abstract class LinkedArtHasSymbolicContentMixin extends LinkedArtModelMixin {
  @Memoize()
  get hasSymbolicContent(): readonly Literal[] {
    return this.filterAndMapObjects(crm.P190_has_symbolic_content, term =>
      term.termType === "Literal" ? (term as Literal) : null
    );
  }
}
