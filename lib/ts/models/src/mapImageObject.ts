import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Image} from "./Image";
import {rdf} from "@paradicms/vocabularies";
import {imageFactories} from "./imageFactories";

/**
 * Map a term in a modelSet to an Image.
 */
export const mapImageObject = (
  modelParameters: Omit<ResourceBackedModelParameters, "identifier">,
  term: Term
): Image | null => {
  switch (term.termType) {
    case "BlankNode":
      for (const rdfTypeQuad of modelParameters.dataset.match(
        term,
        rdf.type,
        null
      )) {
        if (rdfTypeQuad.object.termType !== "NamedNode") {
          continue;
        }
        const imageFactory = imageFactories.get(rdfTypeQuad.object);
        if (imageFactory !== null) {
          return new imageFactory({
            ...modelParameters,
            identifier: term,
          });
        }
      }
      throw new RangeError("unable to determine Image type from blank node");
    case "NamedNode":
      return modelParameters.modelSet.imageByIri(term.value);
    default:
      return null;
  }
};
