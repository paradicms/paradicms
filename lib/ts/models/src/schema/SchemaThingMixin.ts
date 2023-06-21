import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {schema} from "@paradicms/vocabularies";
import {Text} from "../Text";

export abstract class SchemaThingMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
  get alternateNames(): readonly string[] {
    return this.filterAndMapObjects(schema.alternateName, this.mapStringObject);
  }

  get description(): Text | null {
    // return this.findAndMapObject(schema.description, mapText)
    return null;
  }

  get images(): readonly Image[] {
    return [];
    // return this.modelSet.imagesByDepictsIri(this.iri);
  }

  get name(): string | null {
    return this.findAndMapObject(schema.name, this.mapStringObject);
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }

  get url(): string | null {
    return this.findAndMapObject(schema.url, this.mapIriObject);
  }
}
