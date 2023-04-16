import {requireNonNull} from "@paradicms/utilities";
import {cms, dcterms, exif, foaf} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImageDimensions} from "../ImageDimensions";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {CmsRightsMixin} from "./CmsRightsMixin";

export class CmsImage extends Mixin(ResourceBackedNamedModel, CmsRightsMixin)
  implements Image {
  @Memoize()
  get depictsUri(): string {
    return requireNonNull(
      this.findAndMapObject(foaf.depicts, this.mapUriObject)
    );
  }

  get derivedImages(): readonly Image[] {
    if (this.originalImageUri !== null) {
      // This is a derived image
      return [];
    }
    return this.modelSet.imagesByOriginalImageUri(this.uri);
  }

  @Memoize()
  get exactDimensions(): ImageDimensions | null {
    return this.imageDimensions(exif.height, exif.width);
  }

  private imageDimensions(
    heightProperty: NamedNode,
    widthProperty: NamedNode
  ): ImageDimensions | null {
    const height = this.findAndMapObject(heightProperty, this.mapIntObject);
    const width = this.findAndMapObject(widthProperty, this.mapIntObject);

    if (height !== null && width !== null) {
      return {height, width};
    } else if (height !== null || width !== null) {
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

  get label(): string | null {
    return this.title;
  }

  @Memoize()
  get maxDimensions(): ImageDimensions | null {
    return this.imageDimensions(cms.imageMaxHeight, cms.imageMaxWidth);
  }

  @Memoize()
  get originalImageUri(): string | null {
    return this.findAndMapObject(cms.thumbnailOf, this.mapUriObject);
  }

  get originalImage(): Image {
    const originalImageUri = this.originalImageUri;
    return originalImageUri ? this.modelSet.imageByUri(originalImageUri) : this;
  }

  static placeholderSrc(dimensions: ImageDimensions) {
    return `https://paradicms.org/img/placeholder/${dimensions.width}x${dimensions.height}.png`;
  }

  @Memoize()
  get src(): string | null {
    const src = this.findAndMapObject(cms.imageSrc, term =>
      term.termType === "Literal" ? term.value : null
    );
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

  @Memoize()
  get title(): string | null {
    return this.findAndMapObject(dcterms.title, this.mapStringObject);
  }
}
