import {Term} from "@rdfjs/types";
import {AgentUnion} from "./AgentUnion";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralAgent} from "./literal/LiteralAgent";
import {agentFactories} from "./agentFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapTermToAgent = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): AgentUnion | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralAgent(term);
    case "NamedNode": {
      const agent = modelParameters.modelSet.agentByIri(term.value);
      if (agent) {
        return agent;
      } else {
        return mapTermToResourceBackedModel({
          factories: agentFactories,
          modelParameters,
          term,
        });
      }
      return agent;
    }
    default:
      return null;
  }
};
