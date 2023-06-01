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
  get depictsIri(): string {
    return requireNonNull(
      this.findAndMapObject(foaf.depicts, this.mapIriObject)
    );
  }

  get derivedImages(): readonly Image[] {
    if (this.originalImageIri !== null) {
      // This is a derived image
      return [];
    }
    return this.modelSet.imagesByOriginalImageIri(this.iri);
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
    return this.originalImageIri === null;
  }

  get label(): string | null {
    return this.title;
  }

  @Memoize()
  get maxDimensions(): ImageDimensions | null {
    return this.imageDimensions(cms.imageMaxHeight, cms.imageMaxWidth);
  }

  @Memoize()
  get originalImageIri(): string | null {
    return this.findAndMapObject(cms.thumbnailOf, this.mapIriObject);
  }

  get originalImage(): Image {
    const originalImageIri = this.originalImageIri;
    return originalImageIri ? this.modelSet.imageByIri(originalImageIri) : this;
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
      this.iri.startsWith("http://") ||
      this.iri.startsWith("https://")
    ) {
      return this.iri;
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
