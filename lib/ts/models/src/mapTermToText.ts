import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Text} from "./Text";
import {LiteralText} from "./literal/LiteralText";

/**
 * Map a term in a modelSet to a Text.
 */
export const mapTermToText = (
  modelParameters: Omit<ResourceBackedModelParameters, "iri">,
  term: Term
): Text | null => {
  switch (term.termType) {
    case "NamedNode":
      return modelParameters.modelSet.textByIri({
        ...modelParameters,
        iri: term,
      });
    case "Literal":
      return new LiteralText({literal: term});
    default:
      return null;
  }
};
