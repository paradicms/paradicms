import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {LiteralRightsStatement} from "./literal/LiteralRightsStatement";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import {rightsStatementFactories} from "./rightsStatementFactories";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapTermToRightsStatement = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): RightsStatement | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralRightsStatement({literal: term});
    case "NamedNode": {
      const rightsStatement = modelParameters.modelSet.rightsStatementByIri(
        term.value
      );
      if (rightsStatement) {
        return rightsStatement;
      } else {
        return mapTermToResourceBackedModel({
          factories: rightsStatementFactories,
          modelParameters,
          term,
        });
      }
    }
    default:
      return null;
  }
};
