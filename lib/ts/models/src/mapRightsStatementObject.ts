import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {cms, rdf} from "@paradicms/vocabularies";
import {RightsStatement} from "./RightsStatement";
import {CmsRightsStatement} from "./cms/CmsRightsStatement";
import {LiteralRightsStatement} from "./literal/LiteralRightsStatement";

/**
 * Map a term in a modelSet to a RightsStatement.
 */
export const mapRightsStatementObject = (
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
        if (rdfTypeQuad.object.equals(cms.RightsStatement)) {
          return new CmsRightsStatement({
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
