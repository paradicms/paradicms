import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {rdf} from "@paradicms/vocabularies";
import {License} from "./License";
import {LiteralLicense} from "./literal/LiteralLicense";
import {licenseFactories} from "./licenseFactories";

/**
 * Map a term in a modelSet to a License.
 */
export const mapTermToLicense = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): License | null => {
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
        const licenseFactory = licenseFactories.get(rdfTypeQuad.object);
        if (licenseFactory !== null) {
          return new licenseFactory({
            ...modelParameters,
            identifier: term,
          });
        }
      }
      throw new RangeError("unable to determine License type from blank node");
    case "Literal":
      return new LiteralLicense(term);
    case "NamedNode":
      return modelParameters.modelSet.licenseByIri(term.value);
    default:
      return null;
  }
};
