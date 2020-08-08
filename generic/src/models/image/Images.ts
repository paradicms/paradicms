import {Image} from "~/models/image/Image";
import {ImageDimensions} from "~/models/image/ImageDimensions";

export class Images {
  static indexByObjectUri(
    images: readonly Image[]
  ): {[index: string]: readonly Image[]} {
    return images.reduce((map, image) => {
      const existingImages = map[image.object_uri];
      if (existingImages) {
        existingImages.push(image);
      } else {
        map[image.object_uri] = [image];
      }
      return map;
    }, {} as {[index: string]: Image[]});
  }

  static indexByOriginalImageUri(
    images: readonly Image[]
  ): {[index: string]: readonly Image[]} {
    return images.reduce((map, image) => {
      if (!image.original_image_uri) {
        return map;
      }
      const existingImages = map[image.original_image_uri];
      if (existingImages) {
        existingImages.push(image);
      } else {
        map[image.original_image_uri] = [image];
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
      if (image.exact_dimensions) {
        if (contains(maxDimensions, image.exact_dimensions)) {
          candidateImages.push([image, image.exact_dimensions]);
        }
      } else if (image.max_dimensions) {
        if (contains(maxDimensions, image.max_dimensions)) {
          candidateImages.push([image, image.max_dimensions]);
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
