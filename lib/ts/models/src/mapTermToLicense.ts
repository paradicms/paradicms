import {Term} from "@rdfjs/types";
import {License} from "./License";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralLicense} from "./literal/LiteralLicense";

/**
 * Map a term in a modelSet to a License.
 */
export const mapTermToLicense = (
  modelParameters: Omit<ResourceBackedModelParameters, "iri">,
  term: Term
): License | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralLicense({literal: term});
    case "NamedNode":
      return modelParameters.modelSet.licenseByIri(term);
    default:
      return null;
  }
};
