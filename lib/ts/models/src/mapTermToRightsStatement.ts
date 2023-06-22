import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {rdf} from "@paradicms/vocabularies";
import {RightsStatement} from "./RightsStatement";
import {LiteralRightsStatement} from "./literal/LiteralRightsStatement";
import {rightsStatementFactories} from "./rightsStatementFactories";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapTermToRightsStatement = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): RightsStatement | null => {
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
        const rightsStatementFactory = rightsStatementFactories.get(
          rdfTypeQuad.object
        );
        if (rightsStatementFactory !== null) {
          return new rightsStatementFactory({
            ...modelParameters,
            identifier: term,
          });
        }
      }
      throw new RangeError(
        "unable to determine RightsStatement type from blank node"
      );
    case "Literal":
      return new LiteralRightsStatement(term);
    case "NamedNode":
      return modelParameters.modelSet.rightsStatementByIri(term.value);
    default:
      return null;
  }
};
