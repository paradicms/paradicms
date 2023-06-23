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
    case "BlankNode":
      return mapTermToResourceBackedModel({
        factories: agentFactories,
        modelParameters,
        term,
      });
    case "Literal":
      return new LiteralAgent(term);
    case "NamedNode":
      return modelParameters.modelSet.agentByIri(term.value);
    default:
      return null;
  }
};
