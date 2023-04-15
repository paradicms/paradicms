import {Term} from "@rdfjs/types";
import {CmsLocation} from "./CmsLocation";
import {Location} from "./Location";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapLocationObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): Location | string | null => {
  switch (term.termType) {
    case "BlankNode":
      return new CmsLocation({
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
