import {ImageDimensions} from "./ImageDimensions";
import {JoinedRights} from "./JoinedRights";
import {JoinedDataset} from "./JoinedDataset";
import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";

export class JoinedImage {
  constructor(
    private readonly image: Image,
    private readonly joinedDataset: JoinedDataset
  ) {}

  get asImage(): Image {
    return this.image;
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

  get isOriginal(): boolean {
    return this.image.originalImageUri === null;
  }

  get maxDimensions(): ImageDimensions | null {
    return this.image.maxDimensions;
  }

  get originalImage(): JoinedImage {
    return this.image.originalImageUri
      ? this.joinedDataset.imageByUri(this.image.originalImageUri)
      : this;
  }

  get originalImageUri(): string {
    return this.image.originalImageUri ?? this.uri;
  }

  static placeholderSrc(dimensions: ImageDimensions) {
    return `https://place-hold.it/${dimensions.width}x${
      dimensions.height
    }?text=${encodeURIComponent("Missing image")}`;
  }

  get rights(): JoinedRights | null {
    return this.image.rights
      ? new JoinedRights(this.joinedDataset, this.image.rights)
      : null;
  }

  get src(): string | null {
    if (this.image.src) {
      return this.image.src;
    } else if (
      this.image.uri.startsWith("http://") ||
      this.image.uri.startsWith("https://")
    ) {
      return this.image.uri;
    } else {
      return null;
    }
  }

  thumbnail(selector: ThumbnailSelector): JoinedImage | null {
    const originalImage = this.originalImage;
    return selectThumbnail(
      [originalImage].concat(originalImage.derivedImages),
      selector
    );
  }

  get uri(): string {
    return this.image.uri;
  }
}
