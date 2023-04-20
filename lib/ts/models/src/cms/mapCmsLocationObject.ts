import {Term} from "@rdfjs/types";
import {Location} from "../Location";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {LiteralLocation} from "../literal/LiteralLocation";
import {CmsLocation} from "./CmsLocation";

/**
 * Map a term in a modelSet to a Location.
 */
export const mapCmsLocationObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "node">,
  term: Term
): Location | null => {
  switch (term.termType) {
    case "BlankNode":
      return new CmsLocation({
        ...modelParameters,
        node: term,
      });
    case "NamedNode":
      return modelParameters.modelSet.locationByUri(term.value);
    case "Literal":
      return new LiteralLocation(term);
    default:
      return null;
  }
};
