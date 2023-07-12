import {SchemaMediaObjectMixin} from "./SchemaMediaObjectMixin";
import {Mixin} from "ts-mixer";
import {Image} from "../Image";
import {schema} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {ImageDimensions} from "../ImageDimensions";
import {mapSchemaQuantitativeValue} from "./mapSchemaQuantitativeValue";
import {mapTermToString} from "@paradicms/rdf";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import log from "loglevel";
import {mapTermToImage} from "../mapTermToImage";
import {SchemaModel} from "./SchemaModel";

export class SchemaImageObject
  extends Mixin(SchemaModel, SchemaMediaObjectMixin)
  implements Image {
  @Memoize()
  get caption(): string | null {
    return this.findAndMapObject(schema.caption, mapTermToString);
  }

  @Memoize()
  get exactDimensions(): ImageDimensions | null {
    const heightValue = this.findAndMapObject(schema.height, term =>
      mapSchemaQuantitativeValue(this, term)
    )?.value;
    const widthValue = this.findAndMapObject(schema.width, term =>
      mapSchemaQuantitativeValue(this, term)
    )?.value;
    if (typeof heightValue === "number" && typeof widthValue === "number") {
      return {
        height: heightValue,
        width: widthValue,
      };
    } else {
      return null;
    }
  }

  override get label(): string | null {
    return this.caption;
  }

  @Memoize()
  get maxDimensions(): ImageDimensions | null {
    const heightMaxValue =
      this.findAndMapObject(schema.height, term =>
        mapSchemaQuantitativeValue(this, term)
      )?.maxValue ?? null;
    const widthMaxValue =
      this.findAndMapObject(schema.width, term =>
        mapSchemaQuantitativeValue(this, term)
      )?.maxValue ?? null;
    if (heightMaxValue !== null && widthMaxValue !== null) {
      return {
        height: heightMaxValue,
        width: widthMaxValue,
      };
    } else {
      return null;
    }
  }

  @Memoize()
  get src(): string | null {
    const src = this.findAndMapObject(schema.contentUrl, term =>
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

  override thumbnail(selector: ThumbnailSelector): Image | null {
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
    return this.filterAndMapObjects(schema.thumbnail, term =>
        mapTermToImage(this, term)
    );
  }
}
