import {Term} from "@rdfjs/types";
import {Concept} from "./Concept";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {conceptFactories} from "./conceptFactories";
import {LiteralConcept} from "./literal/LiteralConcept";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapTermToConcept = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Concept | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralConcept(term);
    case "NamedNode": {
      const concept = modelParameters.modelSet.conceptByIri(term.value);
      if (concept) {
        return concept;
      } else {
        return mapTermToResourceBackedModel({
          factories: conceptFactories,
          modelParameters,
          term,
        });
      }
    }
    default:
      return null;
  }
};
