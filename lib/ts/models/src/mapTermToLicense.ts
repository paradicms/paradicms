import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {License} from "./License";
import {LiteralLicense} from "./literal/LiteralLicense";
import {licenseFactories} from "./licenseFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to a License.
 */
export const mapTermToLicense = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): License | null => {
  switch (term.termType) {
    case "BlankNode":
      return mapTermToResourceBackedModel({
        factories: licenseFactories,
        modelParameters,
        term,
      });
    case "Literal":
      return new LiteralLicense(term);
    case "NamedNode":
      return modelParameters.modelSet.licenseByIri(term.value);
    default:
      return null;
  }
};
