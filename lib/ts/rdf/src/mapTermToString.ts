import {Term} from "@rdfjs/types";

export const mapTermToString = (term: Term): string | null => {
  if (term.termType !== "Literal") {
    return null;
  }
  return term.value;
};
