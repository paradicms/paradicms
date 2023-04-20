import {Term} from "@rdfjs/types";
import {AgentUnion} from "./AgentUnion";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralAgent} from "./literal/LiteralAgent";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapAgentObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): AgentUnion | null => {
  switch (term.termType) {
    case "BlankNode":
      throw new RangeError("not implemented");
    case "Literal":
      return new LiteralAgent(term);
    case "NamedNode":
      return modelParameters.modelSet.agentByUri(term.value);
    default:
      return null;
  }
};
