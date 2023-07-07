import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {LiteralRightsStatement} from "./literal/LiteralRightsStatement";
import {rightsStatementFactories} from "./rightsStatementFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import log from "loglevel";

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
    case "NamedNode": {
      const rightsStatement = modelParameters.modelSet.rightsStatementByIri(
        term.value
      );
      if (!rightsStatement) {
        log.trace("mapped term to missing rights statement:", term.value);
      }
      return rightsStatement;
    }
    default:
      return null;
  }
};
