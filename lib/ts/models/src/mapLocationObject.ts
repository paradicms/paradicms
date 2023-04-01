import {Term} from "@rdfjs/types";
import {ModelParameters} from "./ModelParameters";
import {Location} from "./Location";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapLocationObject = (
  modelParameters: Omit<ModelParameters, "node">,
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
