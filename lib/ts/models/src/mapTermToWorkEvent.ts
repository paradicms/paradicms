import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {rdf} from "@paradicms/vocabularies";
import {workEventFactories} from "./workEventFactories";
import {WorkEventUnion} from "./WorkEventUnion";

/**
 * Map a term in a modelSet to an WorkEvent.
 */
export const mapTermToWorkEvent = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): WorkEventUnion | null => {
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
        const workEventFactory = workEventFactories.get(rdfTypeQuad.object);
        if (workEventFactory !== null) {
          return new workEventFactory({
            ...modelParameters,
            identifier: term,
          });
        }
      }
      throw new RangeError(
        "unable to determine WorkEvent type from blank node"
      );
    case "NamedNode":
      return modelParameters.modelSet.workEventByIri(term.value);
    default:
      return null;
  }
};
