import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {workEventFactories} from "./workEventFactories";
import {WorkEventUnion} from "./WorkEventUnion";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to an WorkEvent.
 */
export const mapTermToWorkEvent = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): WorkEventUnion | null => {
  switch (term.termType) {
    case "BlankNode":
      return mapTermToResourceBackedModel({
        factories: workEventFactories,
        modelParameters,
        term,
      });
    case "NamedNode":
      return modelParameters.modelSet.workEventByIri(term.value);
    default:
      return null;
  }
};
