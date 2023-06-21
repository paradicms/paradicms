import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {cms, rdf} from "@paradicms/vocabularies";
import {License} from "./License";
import {CmsLicense} from "./cms/CmsLicense";
import {LiteralLicense} from "./literal/LiteralLicense";

/**
 * Map a term in a modelSet to a License.
 */
export const mapLicenseObject = (
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
        if (rdfTypeQuad.object.equals(cms.License)) {
          return new CmsLicense({
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
