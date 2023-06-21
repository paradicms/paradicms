import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {schema} from "@paradicms/vocabularies";
import {Text} from "../Text";
import {mapImageObject} from "../mapImageObject";
import {mapTextObject} from "../mapTextObject";
import {Memoize} from "typescript-memoize";

export abstract class SchemaThingMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
  @Memoize()
  get alternateNames(): readonly string[] {
    return this.filterAndMapObjects(schema.alternateName, this.mapStringObject);
  }

  @Memoize()
  get description(): Text | null {
    return this.findAndMapObject(schema.description, term =>
      mapTextObject(this, term)
    );
  }

  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapObjects(schema.image, term =>
      mapImageObject(this, term)
    );
  }

  get label(): string | null {
    return this.name;
  }

  @Memoize()
  get name(): string | null {
    return this.findAndMapObject(schema.name, this.mapStringObject);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  @Memoize()
  get url(): string | null {
    return this.findAndMapObject(schema.url, this.mapIriObject);
  }
}
