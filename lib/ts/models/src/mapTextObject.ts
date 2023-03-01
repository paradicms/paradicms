import {Term} from "@rdfjs/types";
import {Text} from "./Text";
import {ModelParameters} from "./ModelParameters";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTextObject = (
  modelParameters: Omit<ModelParameters, "node">,
  term: Term
): Text | string | null => {
  switch (term.termType) {
    case "BlankNode":
      return new Text({...modelParameters, node: term});
    case "Literal":
      return term.value;
    default:
      return null;
  }
};
