import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {AgentUnion} from "./AgentUnion";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapAgentObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): AgentUnion | null => {
  switch (term.termType) {
    case "Literal":
      return term.value;
    case "NamedNode":
      return modelParameters.modelSet.agentByUri(term.value);
    default:
      return null;
  }
};
