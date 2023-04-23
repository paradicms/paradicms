import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {Text} from "../Text";
import {LiteralText} from "../literal/LiteralText";
import {CmsText} from "./CmsText";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapCmsTextObject = (
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
