import {Term} from "@rdfjs/types";
import {Location} from "./Location";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralLocation} from "./literal/LiteralLocation";
import {locationFactories} from "./locationFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapTermToLocation = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Location | null => {
  switch (term.termType) {
    case "Literal":
      return new LiteralLocation(term);
    case "NamedNode": {
      const location = modelParameters.modelSet.locationByIri(term.value);
      if (location) {
        return location;
      } else {
        return mapTermToResourceBackedModel({
          factories: locationFactories,
          modelParameters,
          term,
        });
      }
    }
    default:
      return null;
  }
};
