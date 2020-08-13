import {Image} from "~/models/Image";
import {ImageDimensions} from "~/models/ImageDimensions";

export class Images {
  static indexByObjectUri(
    images: readonly Image[]
  ): {[index: string]: readonly Image[]} {
    return images.reduce((map, image) => {
      const existingImages = map[image.objectUri];
      if (existingImages) {
        existingImages.push(image);
      } else {
        map[image.objectUri] = [image];
      }
      return map;
    }, {} as {[index: string]: Image[]});
  }

  static indexByOriginalImageUri(
    images: readonly Image[]
  ): {[index: string]: readonly Image[]} {
    return images.reduce((map, image) => {
      const originalImageUri = image.originalImageUri ?? image.uri;
      const existingImages = map[originalImageUri];
      if (existingImages) {
        existingImages.push(image);
      } else {
        map[originalImageUri] = [image];
      }
      return map;
    }, {} as {[index: string]: Image[]});
  }

  static selectThumbnail(kwds: {
    images: readonly Image[];
    maxDimensions: ImageDimensions;
  }): Image | undefined {
    const {images, maxDimensions} = kwds;

    const contains = (
      leftDimensions: ImageDimensions,
      rightDimensions: ImageDimensions
    ) =>
      leftDimensions.width >= rightDimensions.width &&
      leftDimensions.height >= rightDimensions.height;

    const candidateImages: [Image, ImageDimensions][] = [];
    for (const image of images) {
      if (image.exactDimensions) {
        if (contains(maxDimensions, image.exactDimensions)) {
          candidateImages.push([image, image.exactDimensions]);
        }
      } else if (image.maxDimensions) {
        if (contains(maxDimensions, image.maxDimensions)) {
          candidateImages.push([image, image.maxDimensions]);
        }
      }
    }

    if (candidateImages.length === 0) {
      return undefined;
    } else if (candidateImages.length === 1) {
      return candidateImages[0][0];
    }

    candidateImages.sort((left, right) => {
      if (contains(left[1], right[1])) {
        return 1;
      } else if (contains(right[1], left[1])) {
        return -1;
      } else {
        return 0;
      }
    });

    const thumbnail = candidateImages[candidateImages.length - 1][0];
    return thumbnail;
  }
}
