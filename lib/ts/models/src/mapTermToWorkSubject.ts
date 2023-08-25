import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {WorkSubject} from "./WorkSubject";
import {mapTermToAgent} from "./mapTermToAgent";
import {mapTermToConcept} from "./mapTermToConcept";
import {mapTermToLocation} from "./mapTermToLocation";

/**
 * Map a term in a modelSet to a WorkSubject.
 */
export const mapTermToWorkSubject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): WorkSubject | null => {
  if (term.termType !== "NamedNode") {
    return null;
  }

  {
    const agent = mapTermToAgent(modelParameters, term);
    if (agent) {
      return {agent, type: "Agent"};
    }
  }

  {
    const concept = mapTermToConcept(modelParameters, term);
    if (concept) {
      return {concept, type: "Concept"};
    }
  }

  {
    const location = mapTermToLocation(modelParameters, term);
    if (location) {
      return {location, type: "Location"};
    }
  }

  return null;
};
