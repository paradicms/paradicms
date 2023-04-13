import {Term} from "@rdfjs/types";
import {ModelParameters} from "./ModelParameters";
import {Agent} from "./Agent";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapAgentObject = (
  modelParameters: Omit<ModelParameters, "node">,
  term: Term
): Agent | string | null => {
  switch (term.termType) {
    case "Literal":
      return term.value;
    case "NamedNode":
      return modelParameters.modelSet.agentByUri(term.value);
    default:
      return null;
  }
};
