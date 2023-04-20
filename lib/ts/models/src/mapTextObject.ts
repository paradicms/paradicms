import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {CmsText} from "./cms/CmsText";
import {LiteralText} from "./literal/LiteralText";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTextObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): Text | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      return new CmsText({...modelParameters, node: term});
    case "Literal":
      return new LiteralText(term);
    default:
      return null;
  }
};
