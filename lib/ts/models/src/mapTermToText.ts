import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {LiteralText} from "./literal/LiteralText";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import {textFactories} from "./textFactories";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTermToText = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Text | null => {
  switch (term.termType) {
    case "NamedNode":
      return mapTermToResourceBackedModel({
        factories: textFactories,
        modelParameters,
        term,
      });
    case "Literal":
      return new LiteralText({literal: term});
    default:
      return null;
  }
};
