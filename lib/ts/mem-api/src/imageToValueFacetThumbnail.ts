import {Image} from "@paradicms/models";
import {ValueFacetValueThumbnail} from "@paradicms/api";
import {deleteUndefined} from "@paradicms/utilities";

export const imageToValueFacetValueThumbnail = (
  image: Image | null
): ValueFacetValueThumbnail | undefined => {
  if (!image) {
    return undefined;
  }
  const imageSrc = image.src;
  if (!imageSrc) {
    return undefined;
  }

  const result: ValueFacetValueThumbnail = {
    creators: image.creators.map(creator => creator.label),
    licenses: image.licenses.map(license => license.label),
    exactDimensions: image.exactDimensions ?? undefined,
    maxDimensions: image.maxDimensions ?? undefined,
    rightsHolders: image.rightsHolders.map(holder => holder.label),
    rightsStatements: image.rightsStatements.map(
      rightsStatement => rightsStatement.label
    ),
    src: imageSrc,
  };
  return deleteUndefined(result);
};
