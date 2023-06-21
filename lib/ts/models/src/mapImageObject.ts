import {Term} from "@rdfjs/types";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {Image} from "./Image";
import {CmsImage} from "./cms/CmsImage";
import {cms, rdf, schema} from "@paradicms/vocabularies";
import {SchemaImageObject} from "./schema/SchemaImageObject";

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
        if (rdfTypeQuad.object.equals(cms.Image)) {
          return new CmsImage({
            ...modelParameters,
            identifier: term,
          });
        } else if (rdfTypeQuad.object.equals(schema.ImageObject)) {
          return new SchemaImageObject({
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
