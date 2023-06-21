import {Term} from "@rdfjs/types";
import {AgentUnion} from "./AgentUnion";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralAgent} from "./literal/LiteralAgent";
import {rdf} from "@paradicms/vocabularies";
import {agentFactories} from "./agentFactories";

/**
 * Map a term in a modelSet to an Agent.
 */
export const mapAgentObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): AgentUnion | null => {
  switch (term.termType) {
    case "BlankNode":
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null
      )) {
        if (rdfTypeQuad.object.termType !== "NamedNode") {
          continue;
        }
        const agentFactory = agentFactories.get(rdfTypeQuad.object);
        if (agentFactory !== null) {
          return new agentFactory({...modelParameters, identifier: term});
        }
      }
      throw new RangeError("unable to determine agent type from blank node");
    case "Literal":
      return new LiteralAgent(term);
    case "NamedNode":
      return modelParameters.modelSet.agentByIri(term.value);
    default:
      return null;
  }
};
