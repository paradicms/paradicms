import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {NamedNode} from "n3";
import {EXIF, FOAF, PARADICMS, XSD} from "./vocabularies";
import {Rights} from "./Rights";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Memoize} from "typescript-memoize";

export class Image extends NamedModel {
  get depictsUri() {
    return this.requiredParentNamedNode(FOAF.depicts).value;
  }

  get derivedImages(): readonly Image[] {
    if (this.originalImageUri !== null) {
      // This is a derived image
      return [];
    }
    return this.dataset.imagesByOriginalImageUri(this.uri);
  }

  @Memoize()
  get exactDimensions(): ImageDimensions | null {
    return this.imageDimensions(EXIF.height, EXIF.width);
  }

  private imageDimensions(
    heightProperty: NamedNode,
    widthProperty: NamedNode
  ): ImageDimensions | null {
    const heightLiteral = this.optionalLiteral(heightProperty);
    const widthLiteral = this.optionalLiteral(widthProperty);

    if (heightLiteral && widthLiteral) {
      if (heightLiteral.datatype.value !== XSD.integer.value) {
        throw new RangeError("height must be an xsd:integer");
      }
      if (widthLiteral.datatype.value !== XSD.integer.value) {
        throw new RangeError("width must be an xsd:integer");
      }
      return {
        height: parseInt(heightLiteral.value),
        width: parseInt(widthLiteral.value),
      };
    } else if (heightLiteral || widthLiteral) {
      throw new RangeError(
        "must specify both width and height if either is specified"
      );
    } else {
      return null;
    }
  }

  get isOriginal(): boolean {
    return this.originalImageUri === null;
  }

  @Memoize()
  get maxDimensions(): ImageDimensions | null {
    return this.imageDimensions(
      PARADICMS.imageMaxHeight,
      PARADICMS.imageMaxWidth
    );
  }

  get originalImageUri(): string | null {
    const originalImageUriSubjects = this.store.getSubjects(
      FOAF.thumbnail,
      this.node,
      null
    );
    return originalImageUriSubjects.length > 0
      ? originalImageUriSubjects[0].value
      : null;
  }

  get originalImage(): Image {
    const originalImageUri = this.originalImageUri;
    return originalImageUri ? this.dataset.imageByUri(originalImageUri) : this;
  }

  static placeholderSrc(dimensions: ImageDimensions) {
    return `https://place-hold.it/${dimensions.width}x${
      dimensions.height
    }?text=${encodeURIComponent("Missing image")}`;
  }

  @Memoize()
  get rights(): Rights | null {
    return this._rights;
  }

  get src(): string | null {
    const src = this.optionalString(PARADICMS.imageSrc);
    if (src) {
      return src;
    } else if (
      this.uri.startsWith("http://") ||
      this.uri.startsWith("https://")
    ) {
      return this.uri;
    } else {
      return null;
    }
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    const originalImage = this.originalImage;
    return selectThumbnail(
      [originalImage].concat(originalImage.derivedImages),
      selector
    );
  }
}
