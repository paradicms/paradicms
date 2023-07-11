import {Term} from "@rdfjs/types";

import {DateTimeDescription} from "./DateTimeDescription";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {dateTimeDescriptionFactories} from "./dateTimeDescriptionFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import {LiteralDateTimeDescription} from "./literal/LiteralDateTimeDescription";

/**
 * Map a term in a modelSet to a DateTimeDescription.
 */
export const mapTermToDateTimeDescription = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): DateTimeDescription | null => {
  switch (term.termType) {
    case "BlankNode":
    case "NamedNode":
      return mapTermToResourceBackedModel({
        factories: dateTimeDescriptionFactories,
        modelParameters,
        term,
      });
    case "Literal": {
      return LiteralDateTimeDescription.fromLiteral(term);
    }
    default:
      return null;
  }
};
