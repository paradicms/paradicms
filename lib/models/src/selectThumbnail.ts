import {ImageDimensions} from "./ImageDimensions";
import {ThumbnailSelector} from "./ThumbnailSelector";

/**
 * Select a thumbnail from an array of images, given target, minimum, and maximum dimensions.
 *
 * The images array can contain images derived from different original images. This is useful for e.g.,
 * selecting a single thumbnail to represent a collection of derived image sets. In that case the
 * first thumbnail that fits the desired dimensions is returned, whichever original image that thumbnail
 * is derived from.
 */
export const selectThumbnail = <
  ImageT extends {
    readonly exactDimensions: ImageDimensions | null;
    readonly maxDimensions: ImageDimensions | null;
    readonly originalImageUri: string | null;
    readonly uri: string;
  }
>(
  images: readonly ImageT[],
  selector: ThumbnailSelector
): ImageT | null => {
  const {minDimensions, maxDimensions, targetDimensions} = selector;

  const imagesByOriginalImageUri: {[index: string]: ImageT[]} = {};
  for (const image of images) {
    const originalImageUri = image.originalImageUri ?? image.uri;
    (
      imagesByOriginalImageUri[originalImageUri] ||
      (imagesByOriginalImageUri[originalImageUri] = [])
    ).push(image);
  }

  for (const originalImageUri of Object.keys(imagesByOriginalImageUri)) {
    const candidateImages: {
      image: ImageT;
      imageDimensions: ImageDimensions;
    }[] = [];
    for (const image of imagesByOriginalImageUri[originalImageUri]) {
      let imageDimensions: ImageDimensions;
      if (image.exactDimensions) {
        imageDimensions = image.exactDimensions;
      } else if (image.maxDimensions) {
        imageDimensions = image.maxDimensions;
      } else {
        continue;
      }

      if (maxDimensions) {
        if (imageDimensions.height > maxDimensions.height) {
          continue;
        }
        if (imageDimensions.width > maxDimensions.width) {
          continue;
        }
      }

      if (minDimensions) {
        if (imageDimensions.height < minDimensions.height) {
          continue;
        }
        if (imageDimensions.width < minDimensions.width) {
          continue;
        }
      }

      candidateImages.push({
        image,
        imageDimensions,
      });
    }

    if (candidateImages.length === 0) {
      // console.debug("no candidate images, returning null");
      continue; // On to the next set of images derived from an original image
    } else if (candidateImages.length === 1) {
      // console.debug("single candidate image");
      return candidateImages[0].image;
    }

    const contains = (
      leftDimensions: ImageDimensions,
      rightDimensions: ImageDimensions
    ) =>
      leftDimensions.width >= rightDimensions.width &&
      leftDimensions.height >= rightDimensions.height;

    // Sort images smallest to largest
    // An image A is considered larger than another image B if A's dimensions contain B's dimensions
    // Otherwise the images are considered equal.
    candidateImages.sort((left, right) => {
      if (contains(left.imageDimensions, right.imageDimensions)) {
        return 1;
      } else if (contains(right.imageDimensions, left.imageDimensions)) {
        return -1;
      } else {
        return 0;
      }
    });

    // Find the smallest image that contains the target dimensions.
    // We prefer to scale an image down instead of up.
    // This may lead to choosing very large images. In that case maxDimensions should be used to exclude very large images as candidates.
    for (const candidateImage of candidateImages) {
      if (contains(candidateImage.imageDimensions, targetDimensions)) {
        // console.debug(
        //   "choosing smallest candidate image that's larger than target dimensions"
        // );
        return candidateImage.image;
      }
    }

    // All candidate images are smaller than the target, return the largest of them
    // console.debug(
    //   "choosing largest candidate image that's smaller than target dimensions"
    // );
    return candidateImages[candidateImages.length - 1].image;
  }

  return null;
};
