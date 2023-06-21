import {Term} from "@rdfjs/types";
import {Location} from "./Location";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralLocation} from "./literal/LiteralLocation";
import {cms, rdf} from "@paradicms/vocabularies";
import {CmsLocation} from "./cms/CmsLocation";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapLocationObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Location | null => {
  switch (term.termType) {
    case "BlankNode":
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null
      )) {
        if (rdfTypeQuad.object.equals(cms.Location)) {
          return new CmsLocation({
            ...modelParameters,
            identifier: term,
          });
        }
      }
      throw new RangeError("unable to determine Location type from blank node");
    case "NamedNode":
      return modelParameters.modelSet.locationByIri(term.value);
    case "Literal":
      return new LiteralLocation(term);
    default:
      return null;
  }
};
