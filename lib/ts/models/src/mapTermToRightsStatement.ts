import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {LiteralRightsStatement} from "./literal/LiteralRightsStatement";
import {rightsStatementFactories} from "./rightsStatementFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapTermToRightsStatement = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): RightsStatement | null => {
  switch (term.termType) {
    case "BlankNode":
      return mapTermToResourceBackedModel({
        factories: rightsStatementFactories,
        modelParameters,
        term,
      });
    case "Literal":
      return new LiteralRightsStatement(term);
    case "NamedNode":
      return modelParameters.modelSet.rightsStatementByIri(term.value);
    default:
      return null;
  }
};
