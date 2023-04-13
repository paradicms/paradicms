import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Location} from "./Location";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapLocationObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): Location | string | null => {
  switch (term.termType) {
    case "BlankNode":
      return new Location({
        ...modelParameters,
        node: term,
      });
    case "NamedNode":
      return modelParameters.modelSet.namedLocationByUri(term.value);
    case "Literal":
      return term.value;
    default:
      return null;
  }
};
