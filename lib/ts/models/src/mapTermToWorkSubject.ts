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
      return {
        agent,
        label: agent.label,
        thumbnail: selector => agent.thumbnail(selector),
        type: "Agent",
        value: "Agent-" + agent.key,
      };
    }
  }

  {
    const concept = mapTermToConcept(modelParameters, term);
    if (concept) {
      return {
        concept,
        label: concept.label,
        thumbnail: selector => concept.thumbnail(selector),
        type: "Concept",
        value: "Concept-" + concept.key,
      };
    }
  }

  {
    const location = mapTermToLocation(modelParameters, term);
    if (location) {
      return {
        location,
        label: location.label ?? location.key,
        thumbnail: selector => null,
        type: "Location",
        value: "Location-" + location.key,
      };
    }
  }

  return null;
};
