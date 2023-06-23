import {cms, dcterms, exif, foaf} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImageDimensions} from "../ImageDimensions";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {CmsNamedModel} from "./CmsNamedModel";
import {mapTermToImage} from "../mapTermToImage";
import {mapTermToNumber, mapTermToString} from "@paradicms/rdf";

export class CmsImage extends Mixin(CmsNamedModel, CmsRightsMixin)
  implements Image {
  @Memoize()
  get exactDimensions(): ImageDimensions | null {
    return this.imageDimensions(exif.height, exif.width);
  }

  private imageDimensions(
    heightProperty: NamedNode,
    widthProperty: NamedNode
  ): ImageDimensions | null {
    const height = this.findAndMapObject(heightProperty, mapTermToNumber);
    const width = this.findAndMapObject(widthProperty, mapTermToNumber);

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

  get label(): string | null {
    return this.title;
  }

  @Memoize()
  get maxDimensions(): ImageDimensions | null {
    return this.imageDimensions(cms.imageMaxHeight, cms.imageMaxWidth);
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
    return selectThumbnail(this.thumbnails, selector);
  }

  get thumbnails(): readonly Image[] {
    return this.filterAndMapObjects(foaf.thumbnail, term =>
      mapTermToImage(this, term)
    );
  }

  @Memoize()
  get title(): string | null {
    return this.findAndMapObject(dcterms.title, mapTermToString);
  }
}
