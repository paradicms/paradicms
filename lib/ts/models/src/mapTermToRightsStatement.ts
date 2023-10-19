import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {LiteralRightsStatement} from "./literal/LiteralRightsStatement";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapTermToRightsStatement = (
  modelParameters: Omit<ResourceBackedModelParameters, "iri">,
  term: Term
): RightsStatement | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralRightsStatement({literal: term});
    case "NamedNode":
      return modelParameters.modelSet.rightsStatementByIri(term);
    default:
      return null;
  }
};
