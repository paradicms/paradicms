import {Term} from "@rdfjs/types";
import {Text} from "./Text";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {CmsText} from "CmsText";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTextObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): Text | string | null => {
  switch (term.termType) {
    case "BlankNode":
      return new CmsText({...modelParameters, node: term});
    case "Literal":
      return term.value;
    default:
      return null;
  }
};
