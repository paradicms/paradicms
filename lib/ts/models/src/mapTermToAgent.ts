import {Term} from "@rdfjs/types";
import {Agent} from "./Agent";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {agentFactories} from "./agentFactories";
import {LiteralAgent} from "./literal/LiteralAgent";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapTermToAgent = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Agent | null => {
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
