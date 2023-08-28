import {Term} from "@rdfjs/types";

import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralPartialDateTimeDescription} from "./literal/LiteralPartialDateTimeDescription";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import {partialDateTimeDescriptionFactories} from "./partialDateTimeDescriptionFactories";

/**
 * Map a term in a modelSet to a PartialDateTimeDescription.
 */
export const mapTermToPartialDateTimeDescription = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): PartialDateTimeDescription | null => {
  switch (term.termType) {
    case "NamedNode":
      return mapTermToResourceBackedModel({
        factories: partialDateTimeDescriptionFactories,
        modelParameters,
        term,
      });
    case "Literal": {
      return LiteralPartialDateTimeDescription.fromLiteral(term);
    }
    default:
      return null;
  }
};
