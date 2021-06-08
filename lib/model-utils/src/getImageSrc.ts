import {ImageDimensions} from "@paradicms/models";
import {placeholderImageUrl} from "./placeholderImageUrl";

export const getImageSrc = (kwds: {image: {src: string | null; uri: string} | null | undefined, targetDimensions: ImageDimensions}): string => {
  const {image, targetDimensions} = kwds;
  if (image) {
    if (image.src) {
      return image.src;
    } else if (image.uri.startsWith("http://") || image.uri.startsWith("https://")) {
      return image.uri;
    }
  }

  return placeholderImageUrl({
    dimensions: targetDimensions,
    text: "Missing image",
  });
};