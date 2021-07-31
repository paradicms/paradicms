import {ImageDimensions} from "./ImageDimensions";
import {JoinedRights} from "./JoinedRights";
import {JoinedDataset} from "./JoinedDataset";
import {JoinedInstitution} from "./JoinedInstitution";
import {Image} from "./Image";

export interface ThumbnailSelector {
  minDimensions?: ImageDimensions;
  maxDimensions?: ImageDimensions;
  targetDimensions: ImageDimensions;
}

export class JoinedImage {
  constructor(private readonly image: Image, private readonly joinedDataset: JoinedDataset) {
  }

  // get depicts(): Object {
  //   return this.joinedDataset.objectByUri(this.image.depictsUri);
  // }

  get derivedImages(): readonly JoinedImage[] {
    if (this.image.originalImageUri !== null) {
      // This is a derived image
      return [];
    }
    return this.joinedDataset.derivedImages(this.image.uri);
  }

  get exactDimensions(): ImageDimensions | null {
    return this.image.exactDimensions;
  }

  get institution(): JoinedInstitution {
    return this.joinedDataset.institutionByUri(this.image.institutionUri);
  }

  get isOriginal(): boolean {
    return this.image.originalImageUri === null;
  }

  get maxDimensions(): ImageDimensions | null {
    return this.image.maxDimensions;
  }

  get originalImage(): JoinedImage {
    return this.image.originalImageUri ? this.joinedDataset.imageByUri(this.image.originalImageUri) : this;
  }

  static placeholderSrc(dimensions: ImageDimensions) {
    return `https://place-hold.it/${dimensions.width}x${
      dimensions.height
    }?text=${encodeURIComponent("Missing image")}`;
  }

  get rights(): JoinedRights | null {
    return this.image.rights ? new JoinedRights(this.joinedDataset, this.image.rights) : null;
  }

  get src(): string | null {
    if (this.image.src) {
      return this.image.src;
    } else if (this.image.uri.startsWith("http://") || this.image.uri.startsWith("https://")) {
      return this.image.uri;
    } else {
      return null;
    }
  }

  /**
   * Get a thumbnail of this image that best matches the given selector.
   */
  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    const {minDimensions, maxDimensions, targetDimensions} = selector;

    const originalImage = this.originalImage;

    const candidateImages: {
      image: JoinedImage;
      imageDimensions: ImageDimensions;
    }[] = [];
    for (const image of [originalImage].concat(originalImage.derivedImages)) {
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
      return null;
    } else if (candidateImages.length === 1) {
      // console.debug("single candidate image");
      return candidateImages[0].image;
    }

    const contains = (
      leftDimensions: ImageDimensions,
      rightDimensions: ImageDimensions,
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

  get uri(): string {
    return this.image.uri;
  }
}
