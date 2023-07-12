import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Image} from "./Image";
import {imageFactories} from "./imageFactories";
import {mapTermToResourceBackedModel} from "./mapTermToResourceBackedModel";

/**
 * Map a term in a modelSet to an Image.
 */
export const mapTermToImage = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Image | null => {
  switch (term.termType) {
    case "NamedNode": {
      // The Image may not be in the modelSet if e.g., a Work points to all of its Images but only one (like a
      // thumbnail) is included in the data.
      const image = modelParameters.modelSet.imageByIri(term.value);
      if (image) {
        return image;
      } else {
        return mapTermToResourceBackedModel({
          factories: imageFactories,
          modelParameters,
          term,
        });
      }
      return image;
    }
    default:
      return null;
  }
};
