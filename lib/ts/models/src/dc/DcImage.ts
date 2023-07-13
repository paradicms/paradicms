import {cms, dcterms, exif} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImageDimensions} from "../ImageDimensions";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {mapTermToImage} from "../mapTermToImage";
import {mapTermToNumber, mapTermToString} from "@paradicms/rdf";
import {DcRightsMixin} from "./DcRightsMixin";
import log from "loglevel";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class DcImage extends Mixin(ResourceBackedModel, DcRightsMixin)
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
    const thumbnail = selectThumbnail(this.thumbnails, selector);
    if (thumbnail) {
      return thumbnail;
    } else if (selectThumbnail([this], selector)) {
      log.debug(
        "using original image",
        this.key,
        "as a thumbnail for",
        JSON.stringify(selector)
      );
      return this;
    } else {
      return null;
    }
  }

  @Memoize()
  get thumbnails(): readonly Image[] {
    const thumbnails: Image[] = [];
    for (const quad of this.dataset.match(
      null,
      dcterms.source,
      this._identifier
    )) {
      const thumbnail = mapTermToImage(this, quad.subject);
      if (thumbnail) {
        thumbnails.push(thumbnail);
      }
    }
    return thumbnails;
  }

  @Memoize()
  get title(): string | null {
    return this.findAndMapObject(dcterms.title, mapTermToString);
  }
}
