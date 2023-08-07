import {Image} from "@paradicms/models";
import {ValueFacetValueThumbnail} from "@paradicms/api";

export const imageToValueFacetValueThumbnail = (
  image: Image | null
): ValueFacetValueThumbnail | null => {
  if (!image) {
    return null;
  }
  const imageSrc = image.src;
  if (!imageSrc) {
    return null;
  }

  return {
    creators: image.creators.map(creator => creator.label),
    licenses: image.licenses.map(license => license.label),
    exactDimensions: image.exactDimensions,
    maxDimensions: image.maxDimensions,
    rightsHolders: image.rightsHolders.map(holder => holder.label),
    rightsStatements: image.rightsStatements.map(
      rightsStatement => rightsStatement.label
    ),
    src: imageSrc,
  };
};
