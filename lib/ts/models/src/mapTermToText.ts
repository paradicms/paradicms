import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {LiteralText} from "./literal/LiteralText";
import {textFactories} from "./textFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTermToText = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Text | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      return mapTermToResourceBackedModel({
        factories: textFactories,
        modelParameters,
        term,
      });
    case "Literal":
      return new LiteralText(term);
    default:
      return null;
  }
};