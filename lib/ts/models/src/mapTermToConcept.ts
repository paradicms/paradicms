import {Term} from "@rdfjs/types";
import {Concept} from "./Concept";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralConcept} from "./literal/LiteralConcept";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapTermToConcept = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Concept | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralConcept({literal: term});
    case "NamedNode":
      return modelParameters.modelSet.conceptByIri(term.value);
    default:
      return null;
  }
};
