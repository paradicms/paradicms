import {Term} from "@rdfjs/types";
import {Location} from "./Location";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {LiteralLocation} from "./literal/LiteralLocation";
import {locationFactories} from "./locationFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";
import log from "loglevel";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapTermToLocation = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Location | null => {
  switch (term.termType) {
    case "BlankNode":
      return mapTermToResourceBackedModel({
        factories: locationFactories,
        modelParameters,
        term,
      });
    case "Literal":
      return new LiteralLocation(term);
    case "NamedNode": {
      const location = modelParameters.modelSet.locationByIri(term.value);
      if (!location) {
        log.debug("mapped term to missing location:", term.value);
      }
      return location;
    }
    default:
      return null;
  }
};
