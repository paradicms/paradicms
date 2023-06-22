import {Term} from "@rdfjs/types";
import {Location} from "./Location";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralLocation} from "./literal/LiteralLocation";
import {rdf} from "@paradicms/vocabularies";
import {locationFactories} from "./locationFactories";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapTermToLocation = (
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
        if (rdfTypeQuad.object.termType !== "NamedNode") {
          continue;
        }
        const locationFactory = locationFactories.get(rdfTypeQuad.object);
        if (locationFactory !== null) {
          return new locationFactory({
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
