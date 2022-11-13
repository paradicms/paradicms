import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {Literal, NamedNode} from "@rdfjs/types";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";
import {Mixin} from "ts-mixer";
import {HasRights} from "./mixins";
import {dcterms, exif, foaf} from "@paradicms/vocabularies";

export class Image extends Mixin(NamedModel, HasRights) {
  get depictsUri(): string {
    return requireDefined(
      this.getObjects(foaf.depicts).find(term => term.termType === "NamedNode")
    ).value;
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
    const heightLiteral = this.getObjects(heightProperty).find(
      term =>
        term.termType === "Literal" && term.datatype.value === xsd.integer.value
    ) as Literal | undefined;
    const widthLiteral = this.getObjects(widthProperty).find(
      term =>
        term.termType === "Literal" && term.datatype.value === xsd.integer.value
    ) as Literal | undefined;

    if (heightLiteral && widthLiteral) {
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
    return this.imageDimensions(cms.imageMaxHeight, cms.imageMaxWidth);
  }

  get originalImageUri(): string | null {
    const originalImageUriSubjects = this.store.getSubjects(
      foaf.thumbnail,
      this.node,
      null
    );
    return originalImageUriSubjects.length > 0
      ? originalImageUriSubjects[0].value
      : null;
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

  get src(): string | null {
    const srcLiteral = this.getObjects(cms.imageSrc).find(
      term => term.termType === "Literal"
    );
    if (srcLiteral) {
      return srcLiteral.value;
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

  get title(): string | null {
    return (
      this.getObjects(dcterms.title).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }
}
