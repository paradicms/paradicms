import {SchemaNamedModel} from "./SchemaNamedModel";
import {SchemaMediaObjectMixin} from "./SchemaMediaObjectMixin";
import {Mixin} from "ts-mixer";
import {Image} from "../Image";
import {cms, schema} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {mapTermToImage} from "../mapTermToImage";
import {ImageDimensions} from "../ImageDimensions";
import {mapSchemaQuantitativeValue} from "./mapSchemaQuantitativeValue";

export class SchemaImageObject
  extends Mixin(SchemaNamedModel, SchemaMediaObjectMixin)
  implements Image {
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

  @Memoize()
  get thumbnails(): readonly Image[] {
    return this.filterAndMapObjects(schema.thumbnail, term =>
      mapTermToImage(this, term)
    );
  }
}
