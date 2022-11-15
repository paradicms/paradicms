import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {NamedNode} from "@rdfjs/types";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Memoize} from "typescript-memoize";
import {Mixin} from "ts-mixer";
import {HasRights} from "./mixins";
import {cms, dcterms, exif, foaf, xsd} from "@paradicms/vocabularies";
import {parseIntOrNull, requireNonNull} from "@paradicms/utilities";

export class Image extends Mixin(NamedModel, HasRights) {
  @Memoize()
  get depictsUri(): string {
    return requireNonNull(
      this.findAndMapObject(foaf.depicts, term =>
        term.termType === "NamedNode" ? term.value : null
      )
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
    const integerPropertyValue = (property: NamedNode) =>
      this.findAndMapObject(property, term =>
        term.termType == "Literal" &&
        (!term.datatype || term.datatype.equals(xsd.integer))
          ? parseIntOrNull(term.value)
          : null
      );

    const height = integerPropertyValue(heightProperty);
    const width = integerPropertyValue(widthProperty);

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

  @Memoize()
  get maxDimensions(): ImageDimensions | null {
    return this.imageDimensions(cms.imageMaxHeight, cms.imageMaxWidth);
  }

  @Memoize()
  get originalImageUri(): string | null {
    for (const quad of this.dataset.match(
      null,
      foaf.thumbnail,
      this.node,
      null
    )) {
      return quad.subject.value;
    }
    return null;
  }

  get originalImage(): Image {
    const originalImageUri = this.originalImageUri;
    return originalImageUri ? this.modelSet.imageByUri(originalImageUri) : this;
  }

  static placeholderSrc(dimensions: ImageDimensions) {
    return `https://place-hold.it/${dimensions.width}x${
      dimensions.height
    }?text=${encodeURIComponent("Missing image")}`;
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
    return this.findAndMapObject(dcterms.title, term =>
      term.termType === "Literal" ? term.value : null
    );
  }
}
