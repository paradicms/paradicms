import {Term} from "@rdfjs/types";

import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralPartialDateTimeDescription} from "./literal/LiteralPartialDateTimeDescription";

/**
 * Map a term in a modelSet to a PartialDateTimeDescription.
 */
export const mapTermToPartialDateTimeDescription = (
  modelParameters: Omit<ResourceBackedModelParameters, "iri">,
  term: Term
): PartialDateTimeDescription | null => {
  switch (term.termType) {
    case "NamedNode":
      return modelParameters.modelSet.partialDateTimeDescriptionByIri({
        ...modelParameters,
        iri: term,
      });
    case "Literal":
      return LiteralPartialDateTimeDescription.fromLiteral(term);
    default:
      return null;
  }
};
