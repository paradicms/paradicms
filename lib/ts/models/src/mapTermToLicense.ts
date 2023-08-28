import {Term} from "@rdfjs/types";
import {License} from "./License";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {licenseFactories} from "./licenseFactories";
import {LiteralLicense} from "./literal/LiteralLicense";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to a License.
 */
export const mapTermToLicense = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): License | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralLicense({literal: term});
    case "NamedNode": {
      const license = modelParameters.modelSet.licenseByIri(term.value);
      if (license) {
        return license;
      } else {
        return mapTermToResourceBackedModel({
          factories: licenseFactories,
          modelParameters,
          term,
        });
      }
    }
    default:
      return null;
  }
};
