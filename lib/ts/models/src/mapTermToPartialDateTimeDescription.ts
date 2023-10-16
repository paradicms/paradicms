import {Term} from "@rdfjs/types";

import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralPartialDateTimeDescription} from "./literal/LiteralPartialDateTimeDescription";
import {OwlTimePartialDateTimeDescription} from "./owl-time/OwlTimePartialDateTimeDescription";

/**
 * Map a term in a modelSet to a PartialDateTimeDescription.
 */
export const mapTermToPartialDateTimeDescription = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): PartialDateTimeDescription | null => {
  switch (term.termType) {
    case "NamedNode":
      return new OwlTimePartialDateTimeDescription({
        ...modelParameters,
        identifier: term,
      });
    case "Literal":
      return LiteralPartialDateTimeDescription.fromLiteral(term);
    default:
      return null;
  }
};
