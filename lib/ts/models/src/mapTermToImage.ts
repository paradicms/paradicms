import {Term} from "@rdfjs/types";
import {Image} from "./Image";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";

/**
 * Map a term in a modelSet to an Image.
 */
export const mapTermToImage = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Image | null => {
  switch (term.termType) {
    case "NamedNode":
      // The Image may not be in the modelSet if e.g., a Work points to all of its Images but only one (like a
      // thumbnail) is included in the data.
      return modelParameters.modelSet.imageByIri(term.value);
    default:
      return null;
  }
};
