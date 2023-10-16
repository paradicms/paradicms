import {Term} from "@rdfjs/types";
import {Agent} from "./Agent";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralAgent} from "./literal/LiteralAgent";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapTermToAgent = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Agent | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralAgent({literal: term});
    case "NamedNode":
      return modelParameters.modelSet.agentByIri(term.value);
    default:
      return null;
  }
};
