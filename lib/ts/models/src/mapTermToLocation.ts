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
    case "BlankNode":
      return mapTermToResourceBackedModel({
        factories: locationFactories,
        modelParameters,
        term,
      });
    case "NamedNode":
      return modelParameters.modelSet.locationByIri(term.value);
    case "Literal":
      return new LiteralLocation(term);
    default:
      return null;
  }
};
