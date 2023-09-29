import {crm} from "@paradicms/vocabularies";
import {Literal} from "@rdfjs/types";
import {Memoize} from "typescript-memoize";
import {LinkedArtModelMixin} from "./LinkedArtModelMixin";

export abstract class LinkedArtHasSymbolicContentMixin extends LinkedArtModelMixin {
  @Memoize()
  get hasSymbolicContent(): readonly Literal[] {
    return this.filterAndMapObjects(crm.P190_has_symbolic_content, term =>
      term.termType === "Literal" ? (term as Literal) : null
    );
  }

  protected preMemoizeHasSymbolicContent(): void {
    this.hasSymbolicContent;
  }
}
