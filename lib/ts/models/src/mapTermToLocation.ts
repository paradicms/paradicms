import {Term} from "@rdfjs/types";
import {Location} from "./Location";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralLocation} from "./literal/LiteralLocation";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapTermToLocation = (
  modelParameters: Omit<ResourceBackedModelParameters, "iri">,
  term: Term
): Location | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralLocation({literal: term});
    case "NamedNode":
      return modelParameters.modelSet.locationByIri(term);
    default:
      return null;
  }
};
