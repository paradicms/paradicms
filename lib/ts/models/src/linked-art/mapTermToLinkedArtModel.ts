import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "../ResourceBackedModelParameters";
import {LinkedArtModel} from "./LinkedArtModel";
import {mapTermToResourceBackedModel} from "../mapTermToResourceBackedModel";
import {linkedArtModelFactories} from "./linkedArtModelFactories";

/**
 * Map a term in a modelSet to a LinkedArtModel.
 */
export const mapTermToLinkedArtModel = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): LinkedArtModel | null => {
  if (term.termType !== "NamedNode") {
    return null;
  }
  return mapTermToResourceBackedModel({
    factories: linkedArtModelFactories,
    term,
    modelParameters,
  });
};
